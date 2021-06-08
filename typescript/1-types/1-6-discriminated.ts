{
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    };
    type FailureState = {
        result: 'failure';
        reason: string;
    };

    type LoginState = SuccessState | FailureState;

    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!'
            }
        };
    }

    // printLoginState(state)
    // success -> 🎉 body
    // failure -> 😭 reason
    function printLoginState(state: LoginState) {
        if (state.result === 'success')
            console.log(`🎉 ${state.response.body}`);
        else
            console.log(`😭 ${state.reason}`);
    }

}