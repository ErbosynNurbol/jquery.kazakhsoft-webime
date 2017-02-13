# jquery.kazakhsoft-webime
>This jQuery Plugin will help you to input Kazakh in web.
 [Demo]( http://suhbat.kazakhsoft.com/Read.aspx?TID=8569)

```html
<script src="jquery.min.js"></script>
<script src="jquery.kazakhsoft-webime.js"></script>
```
>Input All input, textarea 
```javascript
 $(function () {
        $('*').inputKzChar(); //default is kz (kazakh chars)
        //$('*').inputKzChar({inputlanguage:'kk'}); //input cyrl chars
        //$('*').inputKzChar({inputlanguage:'ug'}); //input uyghur chars
        //$('*').inputKzChar({inputlanguage:'kg'}); //input kyrgyz chars
    })
```
