angular.module('todomvc')
	.directive('todoItem', function () {
		'use strict';

		return {
			scope: {
				todo: '=',
			},
			template: `
				<div style="display: flex">
					<div class="view" style="flex: 0.97;">
						<input class="toggle" type="checkbox" ng-model="todo.completed" ng-change="$parent.toggleCompleted(todo)">
										<div style="display: flex">

						<label ng-dblclick="$parent.editTodo(todo)">{{todo.title}}</label>
						<label style="padding-right: 40px; margin-left: auto; margin-top: auto; margin-bottom: auto;" ng-if="todo.user.title">{{todo.user.title}}</label>
						</div>
						<button class="destroy" ng-click="$parent.removeTodo(todo)"></button>
					</div>
					<form ng-submit="$parent.saveEdits(todo, 'submit', $parent.newUser)" style="display: flex">
						<input class="edit" ng-trim="false" ng-model="todo.title" todo-escape="$parent.revertEdits(todo)" ng-blur="$parent.saveEdits(todo, 'blur')" todo-focus="todo == editedTodo">
						<select ng-show="todo.isTodo && todo.isEditing" ng-model="$parent.newUser">
								<option ng-repeat="user in $parent.todos | filter: { isUser: true }" value="{{user}}">{{user.title}}</option>
								<option value="">Unassign User</option>
						</select>
					</form>
				</div>
			`,
		};
	});
