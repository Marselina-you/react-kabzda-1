import {actions, followReducer, unfollowReducer} from './usersReducer'
import {usersAPI} from '../api/users-api'
import {APIResponseType, ResultCodesEnum} from '../api/api'

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.follow.mockClear();
    userAPIMock.unfollow.mockClear();
})


const APIResponse: APIResponseType = {
    data: {},
    messages: [],
    resultCode: ResultCodesEnum.Success,
   
}






test('success follow thunk', async () => {
    const thunk = followReducer(1)
//@ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(APIResponse));

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = unfollowReducer(1)
//@ts-ignore

userAPIMock.unfollow.mockReturnValue(Promise.resolve(APIResponse));
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})
