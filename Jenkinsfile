pipeline {
    agent any
    stages {
        stage('build') {
          steps {
            nodejs(nodeJSInstallationName: '20') {
              sh 'pnpm install'
              sh 'pnpm build'
          }
        }
      }
      stage('extract') {
        steps {
          script {
            def packageJson = readJSON file: 'package.json'
            def version = packageJson['version']
            echo "The version of this project is ${version}"
          }
        }
      }
    }
}
