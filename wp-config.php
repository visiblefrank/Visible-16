<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'vis-16');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uX&f{%J*C(uR#aoTL]J$8o&vz^g[>(agyK#@K?RT8-`9aImL9DZS@ziO%22JgK3e');
define('SECURE_AUTH_KEY',  'B8/@o3w-P2g|eB4<4A?$r97uaQOV@NRa+6Vsc?HH)c-&_`S|Q=-@GQZV%2EA4:<A');
define('LOGGED_IN_KEY',    'rC&XX5eb~7_?@Kq++SE`f@D<=oFA;<R~I}1p&aipBV<|p12Em7.cE<jqSLrNA+O@');
define('NONCE_KEY',        'G^s--#]^->kY.b=aS~7]r8G%~C0&-V9)I wQ-~C3&j`gee*Pxe++CPCzlR[|Pztb');
define('AUTH_SALT',        '_sZ6CC6meZ!|NX}Js@9:0U-6e0&IVk 1k *yj)+7fJ|megm.iNUGgkOAB+c+|[q+');
define('SECURE_AUTH_SALT', 'cF11@24DE0Ty,j`[|I~b+3XpwS?Vaa~EnTG*]~?GIXc~Ce<2DuZr.9EK|/7n+Erj');
define('LOGGED_IN_SALT',   'wI|hl&=EvGt>Bva)t#)+@IVQ9$G:Yj5PYm#;T?eSE6!s0U$$-V[_GEczc=-7e[*3');
define('NONCE_SALT',       'ALVX<YOtEm/2:{,&baXOrEbp]/{(kGNa5EF(jUphg{$jR*K$dh0jqq.u*+7-b,Tj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
