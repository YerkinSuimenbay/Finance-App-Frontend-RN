import * as AccountsActionCreators from './accounts'
import * as UserActionCreators from './user'
import * as FeedbackActionCreators from './feedback'

const actionCreators = {
    // ...UsersActionCreators,
    // ...TodoActionCreators,
    ...UserActionCreators,
    ...FeedbackActionCreators,
    ...AccountsActionCreators,
    // ...SwipeActionCreators,
    // ...AccountActionCreators,
    // ...CreateFormActionCreators,
    // ...CategoriesActionCreators,
    // ...CategoryActionCreators,
    // ...TransactionsActionCreators,
    // ...TransactionActionCreators,
    // ...SidebarActionCreators,
    // ...PageActionCreators,
}

export default actionCreators