pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TON_COMPTE/TON_REPO.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo '🚀 Déploiement réussi (JDK 21)'
        }
        failure {
            echo '❌ Pipeline échoué'
        }
    }
}
