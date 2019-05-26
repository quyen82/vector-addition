// Copyright 2019, University of Colorado Boulder

/**
 * @author Martin Veillette
 */
define( require => {
  'use strict';

  // modules
  const BooleanProperty = require( 'AXON/BooleanProperty' );
  const ObservableArray = require( 'AXON/ObservableArray' );
  const Property = require( 'AXON/Property' );
  const Vector = require( 'VECTOR_ADDITION/common/model/Vector' );
  const vectorAddition = require( 'VECTOR_ADDITION/vectorAddition' );
  const VectorOrientation = require( 'VECTOR_ADDITION/common/model/VectorOrientation' );

  /**
   * @constructor
   */
  class CommonModel {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      // @public {BooleanProperty}
      this.sumVisibleProperty = new BooleanProperty( false );

      // @public {BooleanProperty}
      this.valuesVisibleProperty = new BooleanProperty( false );

      // @public {BooleanProperty}
      this.gridVisibleProperty = new BooleanProperty( false );

      // @public {Property.<VectorOrientation>}
      this.vectorOrientationProperty = new Property( VectorOrientation.HORIZONTAL );

      // @public {ObservableArray.<Vector>}
      this.vectors = new ObservableArray();

      const vectorA = new Vector( 5, 0, { label: 'a' } );
      const vectorB = new Vector( 5, 0, { label: 'b' } );
      const vectorC = new Vector( 5, 0, { label: 'c' } );

      this.vectors.addAll( [ vectorA, vectorB, vectorC ] );
    }

    // @public resets the model
    reset() {
      this.sumVisibleProperty.reset();
      this.valuesVisibleProperty.reset();
      this.gridVisibleProperty.reset();
    }
  }

  return vectorAddition.register( 'CommonModel', CommonModel );
} );