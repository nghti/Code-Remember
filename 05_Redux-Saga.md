#Redux Saga

> Redux saga dùng để làm gì: Action trong redux luôn là 1 object thuần (plain object) chứa type, .... -> Redux saga giúp trả về Action ở dạng function...

## Luồng dữ liệu
![img](https://viblo.asia/uploads/a2d5bb2b-32a1-4258-b534-eeffeb95e177.png)

## Demo

```js
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

/* 
  -- Thực hiện hành động được nạp ở func mySaga
  - yield call đưa data lên api data = user
  - yield put đúng/sai sẽ sử lý ở reducer
  worker Saga: will be fired on USER_FETCH_REQUESTED actions
*/
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  -- takeEvery đợi bắt "USER_FETCH_REQUESTED" từ action
  - Chạy func fetchUser
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```