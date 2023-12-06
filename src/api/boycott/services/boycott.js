'use strict';

/**
 * boycott service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boycott.boycott');
