{

    class TimeoutError extends Error {

    }

    class OfflineError extends Error {

    }

    class NetworkClient {
        tryConnect(): void {
            throw new Error(`no network!`);
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        login() {
            this.client.tryConnect();
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    service.login();

    class App {
        constructor(private userSercice: UserService) {
        }

        run() {
            try {
                this.userSercice.login();
            } catch (error) {
                // show dialog to user
                if (error instanceof OfflineError) {
                    console.log(`check your connect!`);
                }
            }
        }
    }

    const app = new App(service);
    app.run();

}