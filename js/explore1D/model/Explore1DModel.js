// Copyright 2019, University of Colorado Boulder

/**
 * @author Martin Veillette
 */
define( require => {
  'use strict';

  // modules
  // const Property = require( 'AXON/Property' );
  // const Vector = require( 'VECTOR_ADDITION/common/model/Vector' );
  // const Vector2Property = require( 'DOT/Vector2Property' );
  const vectorAddition = require( 'VECTOR_ADDITION/vectorAddition' );

  /**
   * @constructor
   */
  class Explore1DModel {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

  }

  return vectorAddition.register( 'Explore1DModel', Explore1DModel );
} );