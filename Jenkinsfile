pipeline {
    agent any
    
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        
        stage('Teste') {
            steps {
                sh 'echo "hello world"'
            }
        }
    }
}
