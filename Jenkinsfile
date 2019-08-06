pipeline {
    agent {
        docker {
            image 'node:10' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'yarn run test' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'yarn run build' 
            }
        }
    }
}