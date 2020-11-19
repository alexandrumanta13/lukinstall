import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-desfundare-wc',
  templateUrl: './desfundare-wc.component.html',
  styleUrls: ['./desfundare-wc.component.scss']
})
export class DesfundareWcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
  }

}
