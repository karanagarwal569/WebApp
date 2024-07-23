node {
    stage('Checkout') {
       // Checkout code from Git repository
               git credentialsId: 'a1878cee-a2f3-40c4-ba4b-d9483e4cc32c', url: 'https://github.com/karanagarwal569/WebApp.git'
     }
	 stage('Build') {
      bat 'npm install'
	  }
    stage('Test') {
        echo "Testing project"
    }
    stage('Deploy') {
        // Deploy artifacts or perform additional steps
                echo 'Deploying artifacts...'
                 bat 'node index.js'
                // Example: deploy to a server or artifact repository
	}
    
}
