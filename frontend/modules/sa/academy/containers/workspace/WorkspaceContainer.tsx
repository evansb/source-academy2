import { connect, Dispatch } from 'react-redux'
import { State } from '../../types'
import { Answer, Question } from 'sa/core/types'
import Workspace, { OwnProps } from '../../components/workspace/Workspace'
import { withStudent } from '../../decorators'
import {
  selectAssessment,
  selectQuestions,
  selectGrading,
  selectAnswers,
} from '../../selectors'

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const { location } = state.routing
  const paths = location!.pathname.split('/')
  const isJournal = paths[2] === 'journal'

  if (isJournal) {
    const id = parseInt(paths[paths.length - 1], 10)
    const assessment = selectAssessment(id)(state)
    const questions = selectQuestions(id)(state)
    const grading = selectGrading(id)(state)
    const answers = selectAnswers(questions)(state)

    return {
      ...ownProps,
      assessment,
      answers,
      questions,
      grading: grading!,
    }
  } else {
    return ownProps
  }
}

export default connect(mapStateToProps)(withStudent(Workspace))
