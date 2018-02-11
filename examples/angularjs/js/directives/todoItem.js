angular.module('todomvc')
	.directive('todoItem', function () {
		'use strict';

		return {
			scope: {
				todo: '=',
			},
			template: `
				<div class="view">
					<input class="toggle" type="checkbox" ng-model="todo.completed" ng-change="$parent.toggleCompleted(todo)">
					<label ng-dblclick="$parent.editTodo(todo)">{{todo.title}}</label>
					<button class="destroy" ng-click="$parent.removeTodo(todo)"></button>
				</div>
				<form ng-submit="$parent.saveEdits(todo, 'submit')">
					<input class="edit" ng-trim="false" ng-model="todo.title" todo-escape="$parent.revertEdits(todo)" ng-blur="$parent.saveEdits(todo, 'blur')" todo-focus="todo == editedTodo">
				</form>
			`,
		};
	});
