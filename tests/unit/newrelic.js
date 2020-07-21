/*
 * Copyright 2020 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

exports.config = {
  app_name           : ['newrelic-tester unit tests'],
  license_key        : 'license key here',
  logging            : {
    level : 'trace',
    filepath : '../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_docker: false
  },
  transaction_tracer : {
    enabled : true
  }
}
