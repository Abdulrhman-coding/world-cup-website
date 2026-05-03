<?php
function maqha_enqueue_assets() {
    wp_enqueue_style(
        'maqha-style',
        get_template_directory_uri() . '/style.css',
        array(),
        '1.0'
    );
    wp_enqueue_script(
        'maqha-script',
        get_template_directory_uri() . '/script.js',
        array(),
        '1.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'maqha_enqueue_assets' );

function maqha_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'maqha_setup' );
