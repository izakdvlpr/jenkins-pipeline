pipeline {
    agent {
        docker {
            image 'node:20'
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
