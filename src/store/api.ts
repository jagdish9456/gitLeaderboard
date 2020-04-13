import axios from "axios"
import { IUser, IRegisterResponse, ILoginUser, ILoginResponse, IGetTopScorers, ICommitRequest, IcommitResponse, IGetGitCommitDetails, IAllGitCommitForUser } from './model'

export const AxioApi = axios.create({
    baseURL: 'http://www.janshakti.org.in/testApi'
})

export const GitApi = axios.create({
    baseURL: 'https://api.github.com'
})

export async function RegisterUser(user: IUser): Promise<IRegisterResponse> {
    const result = await AxioApi.post('/register.php', JSON.stringify({
        user
    }));
    const returnResult: IRegisterResponse = result.data[0];
    return returnResult;
}

export async function LoginUser(user: ILoginUser): Promise<ILoginResponse> {
    const result = await AxioApi.post('/login.php', JSON.stringify({
        user
    }));
    const returnResult: ILoginResponse = result.data[0];
    return returnResult;
}

export async function GetTopScorers(): Promise<IGetTopScorers[]> {
    const result = await AxioApi.post('/getTopScorers.php');
    const returnResult: IGetTopScorers[] = result.data;
    return returnResult;
}

export async function AddNewCommitForUser(commit: ICommitRequest): Promise<IcommitResponse> {
    const result = await AxioApi.post('/submitNewCommit.php', JSON.stringify({
        commit
    }));
    const returnResult: IcommitResponse = result.data[0];
    return returnResult;
}

export async function GetCommitDetailsFromGit(): Promise<IGetGitCommitDetails[]> {
    const result = await GitApi.get('/repos/jagdish9456/leaderboard/commits');
    const json = result.data;
    const CommitObj = [];
    json.sort((a: any, b: any) => {
        return (a.commit.author.name > b.commit.author.name) ? 1 : ((b.commit.author.name > a.commit.author.name) ? -1 : 0);
    });
    for (let i = 0; i < json.length; i++) {
        let count = 1;
        for (let j = i + 1; j < json.length; j++) {
            if (json[i].commit.author.name == json[j].commit.author.name) {
                count++;
                i++;
            }
        }
        const Datajson = { name: json[i].commit.author.name, count: count }
        CommitObj.push(Datajson);
    }
    const returnResult: IGetGitCommitDetails[] = CommitObj;
    return returnResult;
}

export async function GetAllCommitForUser(): Promise<IAllGitCommitForUser[]> {
    const result = await GitApi.get('/repos/jagdish9456/leaderboard/commits');
    const json = result.data;
    const returnResult: IAllGitCommitForUser[] = json.filter((obj: any) => obj.commit.author.name == 'jagdish9456');
    return returnResult;
}