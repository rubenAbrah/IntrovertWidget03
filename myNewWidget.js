myNewWidgetIntrovertIntr = function() {
  var widget = this;
  this.code = null;

  this.yourVar = {};
  this.yourFunc = function() {};

  // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
  this.bind_actions = function(){
      //пример $(document).on('click', 'selector', function(){});
  };

  // вызывается каждый раз при переходе на страницу
  this.render = function() {
let pipelineHeadersWrapper = document.querySelector('div.pipeline_wrapper.pipeline_row') || document.querySelector('div.digital-pipeline__row_header')
let pipelineHeaders = pipelineHeadersWrapper.querySelectorAll('.pipeline_status__head')
pipelineHeaders .forEach(pipelineHeader => {pipelineHeader.querySelector('.pipeline_status__head_title').style.color = pipelineHeader.querySelector('.pipeline_status__head_line').style.color} )  
  };

  // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
  this.init = function(){

  };

  // метод загрузчик, не изменяется
  this.bootstrap = function(code) {
      widget.code = code;
      // если frontend_status не задан, то считаем что виджет выключен
      // var status = yadroFunctions.getSettings(code).frontend_status;
      var status = 1;

      if (status) {
          widget.init();
          widget.render();
          widget.bind_actions();
          $(document).on('widgets:load', function () {
              widget.render();
          });
      }
  }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-name - ИД и widgetNameIntr - уникальные названия виджета
yadroWidget.widgets['myNewWidget-Introvert'] = new myNewWidgetIntrovertIntr();
yadroWidget.widgets['myNewWidget-Introvert'].bootstrap('myNewWidget-Introvert');

