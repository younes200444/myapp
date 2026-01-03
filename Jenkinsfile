pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/younes200444/myapp.git'
            }
        }
        stage('Deploy Application') {
            steps {
                sh 'docker compose up '
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
