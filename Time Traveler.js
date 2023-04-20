javascript:(function() {
  var skipDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var gui = document.createElement('div');
  gui.style.position = 'fixed';
  gui.style.top = '10px';
  gui.style.right = '10px';
  gui.style.padding = '10px';
  gui.style.backgroundColor = '#fff';
  gui.style.border = '1px solid #ccc';
  gui.style.zIndex = '9999';
  gui.innerHTML = '<h2 style="margin: 0; padding: 0; font-family: sans-serif; margin-bottom: 5px; padding-bottom: 3px; text-align: center; border-bottom: 2px solid;">Skip Days</h2>';
  var select = document.createElement('select');
  for (var i = 0; i < skipDays.length; i++) {
    var option = document.createElement('option');
    option.value = skipDays[i];
    option.text = skipDays[i] + ' days';
	select.style.cssText = '-webkit-appearance: none; -moz-appearance: none; background: #fff url(//c.tadst.com/gfx/n/select-arrow3.svg) no-repeat 100%; background-size: auto 100%; border: 1px solid rgba(0,0,0,.2); border-radius: 4px; height: 2em; line-height: 2em; padding: 0 2.5em 0 .5em; vertical-align: middle;';
    select.appendChild(option);
  }
  gui.appendChild(select);
  var button = document.createElement('button');
  button.textContent = 'Skip';
button.style.cssText = 'background-color: #7db500; border: 1px solid rgba(0,0,0,.2); border-radius: 4px; box-shadow: 0 2px 2px rgba(0,0,0,.2); color: #fff; font-size: 14px; height: 2em; line-height: 2em; margin: 0; padding: 0 1em; vertical-align: middle; cursor: pointer; transition: all 0.3s ease; margin-right: 10px; margin-left: 10px;';
button.addEventListener('mouseenter', function() {
  button.style.backgroundColor = 'black';
});
button.addEventListener('mouseleave', function() {
  button.style.backgroundColor = '#7db500';
  button.style.border = '1px solid rgba(0,0,0,.2)';
});
  button.addEventListener('click', function() {
    var days = parseInt(select.value);
    var script = document.createElement('script');
    script.textContent = 'if (!window.originalDate) { window.originalDate = Date; } if (!window.FakeDate) { class FakeDate extends Date { constructor(...args) { super(...args); this.setDate(this.getDate() + ' + days + '); } } window.FakeDate = FakeDate; window.Date = FakeDate; } else { window.Date = FakeDate; }';
    document.body.appendChild(script);
    setTimeout(function() {
      document.body.removeChild(script);
      if (window.originalDate) {
        window.Date = window.originalDate;
        window.originalDate = null;
      }
    }, 1000);
  });
  gui.appendChild(button);
  var closeButton = document.createElement('button');
  closeButton.textContent = 'x';
  closeButton.style.float = 'right';
  closeButton.style.display = 'block';
  closeButton.style.cssText = '-webkit-appearance: none; -moz-appearance: none; color: #000; float: right; font-size: 31px; font-weight: 700; line-height: 1; margin-top: -2px; opacity: .5; border: 0; padding: 0; font-family: Helvetica,Arial,Sans-Serif; -webkit-text-size-adjust: 100%; --grid-width: 0px; --gutter-width: 0px; padding: 0; cursor: pointer;';
  closeButton.addEventListener('mouseenter', function() {
  closeButton.style.color = 'gray';
});
closeButton.addEventListener('mouseleave', function() {
   closeButton.style.color = 'black';
});
  closeButton.addEventListener('click', function() {
    gui.style.display = 'none';
  });
  gui.appendChild(closeButton);
  document.body.appendChild(gui);
})();
