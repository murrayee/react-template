pipeline {
    agent {
        docker {
            image 'node:10' 
            args '-p 1234:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'yarn run test' 
            }
        }
        stage('Build') { 
            steps {
                sh 'yarn run build' 
            }
        }
    }
}