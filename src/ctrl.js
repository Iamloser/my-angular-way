myApp.controller('HelloCtrl', ['$scope', function($scope){
	/*
	  AngularJS 允许跨越作用域层级，传播带有信息的命名事件（named events）
    事件可以从任何作用域向上分发 $emit 或向下广播 $broadcast
    event对象同样有 preventDefault() 和 stopPropagation(),后者用来阻止冒泡
	*/

  /*
    精通angular书中说明：
      对于某些问题来说，虽然跨作用于层级的事件传播（特别是全局的、异步的、关于状态的变迁通知）
      是非常优雅的解决方案，但是还是应该谨慎使用。通常我们可以依赖双向数据绑定更快捷的解决问题。
      angular框架中仅有三个事件
      $includeContentRequested $includeContentLoaded $viewContentLoaded
      可以被向上分发（emitted）
      七个事件
      $locationChangeSuccess $locationChangeStart $routeUpdate $routeChangeStart
      $routeChangeSuccess $routeChangeError $destroy
      可以被向下广播。
      所以，使用作用域事件应该相当保守
  */

  // 这个例子就是监听URL的变化，$locationChangeSuccess由$rootscope广播
  // 可用于更新面包屑之类的需要监听URL的功能
	$scope.$on('$locationChangeSuccess',function(event,newUrl,oldUrl){
		console.log(event);
		console.log(newUrl);
		console.log(oldUrl);
	})
}]);
