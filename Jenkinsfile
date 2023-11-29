pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Runing tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}