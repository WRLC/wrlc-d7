<?PHP
function NCD_wysiwyg_editor_settings_alter(&$settings, $context){
    //check if the editor is ckeditor and the version is at least 4.0
    if($context['profile']->editor=='ckeditor' && $context['editor']['installed version'][0]>3){
        //add custom settings for ckeditor 4.+ here
        $settings['allowedContent'] = TRUE;
    }
}
?>