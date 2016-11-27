(function($){
    
    $.fn.filterPlug = function(options){
        var options = $.extend({
            filter:'blur',
            scale: 'middle'
        }, options)
        
        
        var start = function(){
            var section = $(this).parent();
            var img = $(this).css('background-image');
            section.append('<div class="filtered">');
            $('.filtered').css('background-image', img);
            if(options.scale === 'middle'){
                var level_blur = 5;
                var level_gray = 0.6;
                var level_bright = 150;
                var level_contrast = 0.8;
            }else if(options.scale === 'hight'){
                level_blur = 9;
                level_gray = 1.2;
                level_bright = 200;
                level_contrast = 1.7;
            }else if(options.scale === 'low'){
                level_blur = 2;
                level_gray = 0.4;
                level_bright = 50;
                level_contrast = 0.2;
            }
            switch(options.filter){
                case 'blur':
                $('.filtered').css('filter','blur('+level_blur+'px)');
                    break;
            
                case 'grayscale':
                $('.filtered').css('filter','grayscale('+level_gray+')');
                    break;
                    
                case 'brightness':
                $('.filtered').css('filter', 'brightness('+level_bright+'%)');
                    break;
                    
                case 'contrast':
                $('.filtered').css('filter', 'contrast('+level_contrast+')')
                    break;
        
            default:
        }
            
            
        }
        
           return this.each(start)   
    }
    
}(jQuery))