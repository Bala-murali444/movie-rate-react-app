pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git credentialsId: 'git-creds', url: 'https://github.com/Bala-murali444/movie-rate-react-app.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}