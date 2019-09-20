<!DOCTYPE html>
<html>
<head>

<?php print $head; ?>
<?php print $page_top; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>

<script type="text/javascript" src="/sites/all/themes/zymphonie_subtheme/js/global.js"></script>
<script type="text/javascript" src="/sites/all/themes/zymphonie_subtheme/js/retina.js"></script>
<script type="text/javascript" src="/sites/all/themes/zymphonie_subtheme/js/plugins.js"></script>
<script type="text/javascript" src="/sites/all/themes/zymphonie_subtheme/js/custom2.js"></script>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page; ?>
</body>
</html>