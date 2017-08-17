#!groovy

properties(
  [[$class: 'GithubProjectProperty', displayName: 'Integration tests', projectUrlStr: 'https://github.com/hmcts/legal-integration-tests.git'],
   pipelineTriggers([
     [$class: 'GitHubPushTrigger'],
     [$class: 'hudson.triggers.TimerTrigger', spec  : 'H 1 * * *']
   ])]
)

@Library(['Reform', 'CMC@feature/Add-Legal-integration-tests-in-jenkins-library'])
import uk.gov.hmcts.cmc.integrationtests.IntegrationTests
import uk.gov.hmcts.cmc.integrationtests.Team

def integrationTests = new IntegrationTests(env, this)

timestamps {
  node {
    try {
      def integrationTestsVersion

      stage('Checkout') {
        deleteDir()
        checkout scm
      }

      stage('Setup') {
        sh 'yarn install'
      }

      stage('Lint') {
        sh 'yarn lint'
      }

      stage('Build image') {
        integrationTestsVersion = dockerImage imageName: 'cmc/legal-integration-tests'
      }

      stage('Run integration tests') {
        integrationTests.execute(['INTEGRATION_TESTS_VERSION': integrationTestsVersion], Team.LEGAL)
      }
    } finally {
      sh "docker-compose down --remove-orphans"
    }

  }
}
