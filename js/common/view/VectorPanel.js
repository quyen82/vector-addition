// Copyright 2019, University of Colorado Boulder

/**
 * Shows the panel with draggable vectors.
 *
 * @author Martin Veillette
 * */
define( require => {
  'use strict';

  // modules
  const ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  const BooleanProperty = require( 'AXON/BooleanProperty' );
  const DragListener = require( 'SCENERY/listeners/DragListener' );
  const LayoutBox = require( 'SCENERY/nodes/LayoutBox' );
  const Node = require( 'SCENERY/nodes/Node' );

  const vectorAddition = require( 'VECTOR_ADDITION/vectorAddition' );
  const VectorNode = require( 'VECTOR_ADDITION/common/view/VectorNode' );


  class VectorPanel extends Node {

    /**
     * @param {ModelViewTransform2} modelViewTransform
     */
    constructor( modelViewTransform, vector ) {

      super();

      const vectorNode = new VectorNode( vector, modelViewTransform );
      vectorNode.visible = false;

      this.addChild( vectorNode );

      const vectorIconNode = new ArrowNode( 0, 0, 30, 0, {} );

      const isVectorInPlayAreaProperty = new BooleanProperty( false );

      isVectorInPlayAreaProperty.link( inPlayArea => { vectorNode.visible = inPlayArea; } );

      // Capture image for icon
      initializeIcon( vectorIconNode, isVectorInPlayAreaProperty, event => {

        vectorNode.center = this.globalToParentPoint( event.pointer.point );

        // vectorArrow provided as targetNode in the DragListener constructor, so this press will target it
        vectorNode.dragListener.press( event );

        isVectorInPlayAreaProperty.value = true;
      } );

      const box = new LayoutBox( {
        spacing: 10,
        children: [
          vectorIconNode
        ]
      } );
      box.right = 950;
      box.top = 300;
      this.addChild( box );
    }
  }

  /**
   * Initialize the icon for use in the toolbox.
   * @param {Node} node
   * @param {Property.<boolean>} inPlayAreaProperty
   * @param {Object} forwardingListener
   */
  const initializeIcon = ( node, inPlayAreaProperty, forwardingListener ) => {
    node.cursor = 'pointer';
    inPlayAreaProperty.link( inPlayArea => { node.visible = !inPlayArea; } );
    node.addInputListener( DragListener.createForwardingListener( forwardingListener ) );
  };

  return vectorAddition.register( 'VectorPanel', VectorPanel );
} );