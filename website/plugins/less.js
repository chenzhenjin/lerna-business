/*
 * @Author: OBKoro1
 * @Date: 2022-09-10 16:56:27
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-09-10 16:56:42
 * @FilePath: /lern-business/website/plugins/less.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
const decamelize = require('decamelize');

module.exports = function (_, opt = {}) {
  delete opt.id;

  const options = {
    ...opt,
    lessOptions: {
      javascriptEnabled: true,
      ...opt.lessOptions,
    },
  };

  return {
    name: 'docusaurus-plugin-less',
    configureWebpack(_, isServer, utils) {
      const { getStyleLoaders } = utils;
      const isProd = process.env.NODE_ENV === 'production';
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              oneOf: [
                {
                  test: /\.module\.less$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        mode: 'local',
                        getLocalIdent: (context, _, localName) => {
                          const match = context.resourcePath.replace(/\\/, '/').match(/.*\/src\/(.*)\/.*\.module\..*/);

                          if (match) {
                            return `bs-${decamelize(match[1], '-')}__${localName}`;
                          }

                          return `bs-${localName}`;
                        },
                        exportLocalsConvention: 'camelCase',
                      },
                      importLoaders: 1,
                      sourceMap: !isProd,
                    }),
                    {
                      loader: 'less-loader',
                      options,
                    },
                  ],
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: 'less-loader',
                      options,
                    },
                  ],
                },
              ],
            },
          ],
        },
      };
    },
  };
};