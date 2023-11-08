pipeline {
  agent any // This tells Jenkins to allocate a workspace and run the pipeline on any available agent
  
  stages {
      stage('Build') { // Stage 1: Build
          steps {
              echo 'Building the project...'
              // Insert build steps here
          }
      }
      stage('Test') { // Stage 2: Test
          steps {
              echo 'Testing the project...'
              // Insert test steps here
          }
      }
      stage('Deploy') { // Stage 3: Deploy
          steps {
              echo 'Deploying the project...'
              // Insert deployment steps here
          }
      }
  }
}