<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="ar" dir="rtl">
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="شاهد مباريات كأس العالم FIFA 2026 في أجواء فاخرة. احجز طاولتك في أرقى وجهة لليالي المباريات في المملكة العربية السعودية." />
  <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <span class="logo-icon">⬡</span>
        <span class="logo-text"><?php bloginfo('name'); ?></span>
      </div>
      <ul class="nav-links" id="navLinks">
        <li><a href="#experience">التجربة</a></li>
        <li><a href="#menu">القائمة</a></li>
        <li><a href="#offers">العروض</a></li>
        <li><a href="#gallery">الصور</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
      </ul>
      <a href="#booking" class="nav-cta">احجز الآن</a>
      <button class="nav-toggle" id="navToggle" aria-label="القائمة">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
