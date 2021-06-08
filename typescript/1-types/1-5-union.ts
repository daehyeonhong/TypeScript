{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction): void {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    };
    type FailureState = {
        reason: string;
    };

    type LoginState = SuccessState | FailureState;

    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        };
    }

    // printLoginState(state)
    // success -> 🎉 body
    // failure -> 😭 reason
    function printLoginState(state: LoginState) {
        if ('response' in state)
            console.log(`🎉 ${state.response.body}`);
        else
            console.log(`😭 ${state.reason}`);
    }


}