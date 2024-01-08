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
    }
}
