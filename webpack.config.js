const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée de l'application
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie
    filename: 'bundle.js', // Nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Support pour les fichiers JavaScript et JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // Autres règles pour le traitement d'autres types de fichiers
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensions de fichiers à résoudre
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  // Autres configurations Webpack (plugins, etc.)
};