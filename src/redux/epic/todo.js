import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as types from '../actionTypes/todo';
import { addTodSuc, addTodoErr, deleteTodoSuc, deleteTodoErr } from '../actions/todo';

const addTodoEpic = action$ =>
    action$.pipe(
        ofType(types.ADD_TODO$),
        switchMap(action => of(addTodSuc(action.payload))),
        catchError(() => of(addTodoErr('error')))
    );

const deleteTodoEpic = action$ =>
    action$.pipe(
        ofType(types.DELETE_TODO$),
        switchMap(action => of(deleteTodoSuc(action.payload))),
        catchError(() => of(deleteTodoErr('error')))
    );

export default [addTodoEpic, deleteTodoEpic];
