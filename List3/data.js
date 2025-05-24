const flags = [
  {
    id: 'ad',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ad.svg',
    name: 'Andorra',
  },
  {
    id: 'ae',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ae.svg',
    name: 'United Arab Emirates',
  },
  {
    id: 'af',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/af.svg',
    name: 'Afghanistan',
  },
  {
    id: 'ag',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ag.svg',
    name: 'Antigua and Barbuda',
  },
  {
    id: 'ai',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ai.svg',
    name: 'Anguilla',
  },
  {
    id: 'al',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/al.svg',
    name: 'Albania',
  },
  {
    id: 'am',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/am.svg',
    name: 'Armenia',
  },
  {
    id: 'an',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/an.svg',
    name: 'Netherlands Antilles',
  },
  {
    id: 'ao',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ao.svg',
    name: 'Angola',
  },
  {
    id: 'aq',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/aq.svg',
    name: 'Antarctica',
  },
  {
    id: 'ar',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ar.svg',
    name: 'Argentina',
  },
  {
    id: 'as',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/as.svg',
    name: 'American Samoa',
  },
  {
    id: 'at',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/at.svg',
    name: 'Austria',
  },
  {
    id: 'au',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/au.svg',
    name: 'Australia',
  },
  {
    id: 'aw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/aw.svg',
    name: 'Aruba',
  },
  {
    id: 'ax',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ax.svg',
    name: 'Åland Islands',
  },
  {
    id: 'az',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/az.svg',
    name: 'Azerbaijan',
  },
  {
    id: 'ba',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ba.svg',
    name: 'Bosnia and Herzegovina',
  },
  {
    id: 'bb',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bb.svg',
    name: 'Barbados',
  },
  {
    id: 'bd',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bd.svg',
    name: 'Bangladesh',
  },
  {
    id: 'be',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/be.svg',
    name: 'Belgium',
  },
  {
    id: 'bf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bf.svg',
    name: 'Burkina Faso',
  },
  {
    id: 'bg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bg.svg',
    name: 'Bulgaria',
  },
  {
    id: 'bh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bh.svg',
    name: 'Bahrain',
  },
  {
    id: 'bi',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bi.svg',
    name: 'Burundi',
  },
  {
    id: 'bj',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bj.svg',
    name: 'Benin',
  },
  {
    id: 'bl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bl.svg',
    name: 'Saint Barthélemy',
  },
  {
    id: 'bm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bm.svg',
    name: 'Bermuda',
  },
  {
    id: 'bn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bn.svg',
    name: 'Brunei Darussalam',
  },
  {
    id: 'bo',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bo.svg',
    name: 'Bolivia',
  },
  {
    id: 'bq',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bq.svg',
    name: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    id: 'br',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/br.svg',
    name: 'Brazil',
  },
  {
    id: 'bs',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bs.svg',
    name: 'Bahamas',
  },
  {
    id: 'bt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bt.svg',
    name: 'Bhutan',
  },
  {
    id: 'bv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bv.svg',
    name: 'Bouvet Island',
  },
  {
    id: 'bw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bw.svg',
    name: 'Botswana',
  },
  {
    id: 'by',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/by.svg',
    name: 'Belarus',
  },
  {
    id: 'bz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bz.svg',
    name: 'Belize',
  },
  {
    id: 'ca',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ca.svg',
    name: 'Canada',
  },
  {
    id: 'cc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cc.svg',
    name: 'Cocos (Keeling) Islands',
  },
  {
    id: 'cd',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cd.svg',
    name: 'Congo, The Democratic Republic Of The',
  },
  {
    id: 'cf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cf.svg',
    name: 'Central African Republic',
  },
  {
    id: 'cg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cg.svg',
    name: 'Congo',
  },
  {
    id: 'ch',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ch.svg',
    name: 'Switzerland',
  },
  {
    id: 'ci',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ci.svg',
    name: "Côte D'Ivoire",
  },
  {
    id: 'ck',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ck.svg',
    name: 'Cook Islands',
  },
  {
    id: 'cl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cl.svg',
    name: 'Chile',
  },
  {
    id: 'cm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cm.svg',
    name: 'Cameroon',
  },
  {
    id: 'cn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cn.svg',
    name: 'China',
  },
  {
    id: 'co',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/co.svg',
    name: 'Colombia',
  },
  {
    id: 'cr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cr.svg',
    name: 'Costa Rica',
  },
  {
    id: 'cu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cu.svg',
    name: 'Cuba',
  },
  {
    id: 'cv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cv.svg',
    name: 'Cape Verde',
  },
  {
    id: 'cw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cw.svg',
    name: 'Curaçao',
  },
  {
    id: 'cx',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cx.svg',
    name: 'Christmas Island',
  },
  {
    id: 'cy',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cy.svg',
    name: 'Cyprus',
  },
  {
    id: 'cz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cz.svg',
    name: 'Czech Republic',
  },
  {
    id: 'de',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/de.svg',
    name: 'Germany',
  },
  {
    id: 'dj',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dj.svg',
    name: 'Djibouti',
  },
  {
    id: 'dk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dk.svg',
    name: 'Denmark',
  },
  {
    id: 'dm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dm.svg',
    name: 'Dominica',
  },
  {
    id: 'do',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/do.svg',
    name: 'Dominican Republic',
  },
  {
    id: 'dz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dz.svg',
    name: 'Algeria',
  },
  {
    id: 'ec',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ec.svg',
    name: 'Ecuador',
  },
  {
    id: 'ee',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ee.svg',
    name: 'Estonia',
  },
  {
    id: 'eg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/eg.svg',
    name: 'Egypt',
  },
  {
    id: 'eh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/eh.svg',
    name: 'Western Sahara',
  },
  {
    id: 'er',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/er.svg',
    name: 'Eritrea',
  },
  {
    id: 'es',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/es.svg',
    name: 'Spain',
  },
  {
    id: 'et',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/et.svg',
    name: 'Ethiopia',
  },
  {
    id: 'fi',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fi.svg',
    name: 'Finland',
  },
  {
    id: 'fj',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fj.svg',
    name: 'Fiji',
  },
  {
    id: 'fk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fk.svg',
    name: 'Falkland Islands (Malvinas)',
  },
  {
    id: 'fm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fm.svg',
    name: 'Micronesia, Federated States Of',
  },
  {
    id: 'fo',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fo.svg',
    name: 'Faroe Islands',
  },
  {
    id: 'fr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fr.svg',
    name: 'France',
  },
  {
    id: 'ga',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ga.svg',
    name: 'Gabon',
  },
  {
    id: 'gb',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gb.svg',
    name: 'United Kingdom',
  },
  {
    id: 'gd',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gd.svg',
    name: 'Grenada',
  },
  {
    id: 'ge',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ge.svg',
    name: 'Georgia',
  },
  {
    id: 'gf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gf.svg',
    name: 'French Guiana',
  },
  {
    id: 'gg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gg.svg',
    name: 'Guernsey',
  },
  {
    id: 'gh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gh.svg',
    name: 'Ghana',
  },
  {
    id: 'gi',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gi.svg',
    name: 'Gibraltar',
  },
  {
    id: 'gl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gl.svg',
    name: 'Greenland',
  },
  {
    id: 'gm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gm.svg',
    name: 'Gambia',
  },
  {
    id: 'gn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gn.svg',
    name: 'Guinea',
  },
  {
    id: 'gp',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gp.svg',
    name: 'Guadeloupe',
  },
  {
    id: 'gq',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gq.svg',
    name: 'Equatorial Guinea',
  },
  {
    id: 'gr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gr.svg',
    name: 'Greece',
  },
  {
    id: 'gs',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gs.svg',
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 'gt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gt.svg',
    name: 'Guatemala',
  },
  {
    id: 'gu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gu.svg',
    name: 'Guam',
  },
  {
    id: 'gw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gw.svg',
    name: 'Guinea-Bissau',
  },
  {
    id: 'gy',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gy.svg',
    name: 'Guyana',
  },
  {
    id: 'hk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hk.svg',
    name: 'Hong Kong',
  },
  {
    id: 'hm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hm.svg',
    name: 'Heard and McDonald Islands',
  },
  {
    id: 'hn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hn.svg',
    name: 'Honduras',
  },
  {
    id: 'hr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hr.svg',
    name: 'Croatia',
  },
  {
    id: 'ht',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ht.svg',
    name: 'Haiti',
  },
  {
    id: 'hu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hu.svg',
    name: 'Hungary',
  },
  {
    id: 'id',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/id.svg',
    name: 'Indonesia',
  },
  {
    id: 'ie',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ie.svg',
    name: 'Ireland',
  },
  {
    id: 'il',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/il.svg',
    name: 'Israel',
  },
  {
    id: 'im',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/im.svg',
    name: 'Isle of Man',
  },
  {
    id: 'in',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/in.svg',
    name: 'India',
  },
  {
    id: 'io',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/io.svg',
    name: 'British Indian Ocean Territory',
  },
  {
    id: 'iq',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/iq.svg',
    name: 'Iraq',
  },
  {
    id: 'ir',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ir.svg',
    name: 'Iran, Islamic Republic Of',
  },
  {
    id: 'is',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/is.svg',
    name: 'Iceland',
  },
  {
    id: 'it',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/it.svg',
    name: 'Italy',
  },
  {
    id: 'je',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/je.svg',
    name: 'Jersey',
  },
  {
    id: 'jm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jm.svg',
    name: 'Jamaica',
  },
  {
    id: 'jo',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jo.svg',
    name: 'Jordan',
  },
  {
    id: 'jp',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jp.svg',
    name: 'Japan',
  },
  {
    id: 'ke',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ke.svg',
    name: 'Kenya',
  },
  {
    id: 'kg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kg.svg',
    name: 'Kyrgyzstan',
  },
  {
    id: 'kh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kh.svg',
    name: 'Cambodia',
  },
  {
    id: 'ki',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ki.svg',
    name: 'Kiribati',
  },
  {
    id: 'km',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/km.svg',
    name: 'Comoros',
  },
  {
    id: 'kn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kn.svg',
    name: 'Saint Kitts And Nevis',
  },
  {
    id: 'kp',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kp.svg',
    name: "Korea, Democratic People's Republic Of",
  },
  {
    id: 'kr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kr.svg',
    name: 'Korea, Republic of',
  },
  {
    id: 'kw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kw.svg',
    name: 'Kuwait',
  },
  {
    id: 'ky',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ky.svg',
    name: 'Cayman Islands',
  },
  {
    id: 'kz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kz.svg',
    name: 'Kazakhstan',
  },
  {
    id: 'la',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/la.svg',
    name: "Lao People's Democratic Republic",
  },
  {
    id: 'lb',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lb.svg',
    name: 'Lebanon',
  },
  {
    id: 'lc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lc.svg',
    name: 'Saint Lucia',
  },
  {
    id: 'li',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/li.svg',
    name: 'Liechtenstein',
  },
  {
    id: 'lk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lk.svg',
    name: 'Sri Lanka',
  },
  {
    id: 'lr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lr.svg',
    name: 'Liberia',
  },
  {
    id: 'ls',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ls.svg',
    name: 'Lesotho',
  },
  {
    id: 'lt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lt.svg',
    name: 'Lithuania',
  },
  {
    id: 'lu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lu.svg',
    name: 'Luxembourg',
  },
  {
    id: 'lv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lv.svg',
    name: 'Latvia',
  },
  {
    id: 'ly',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ly.svg',
    name: 'Libya',
  },
  {
    id: 'ma',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ma.svg',
    name: 'Morocco',
  },
  {
    id: 'mc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mc.svg',
    name: 'Monaco',
  },
  {
    id: 'md',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/md.svg',
    name: 'Moldova, Republic of',
  },
  {
    id: 'me',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/me.svg',
    name: 'Montenegro',
  },
  {
    id: 'mf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mf.svg',
    name: 'Saint Martin',
  },
  {
    id: 'mg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mg.svg',
    name: 'Madagascar',
  },
  {
    id: 'mh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mh.svg',
    name: 'Marshall Islands',
  },
  {
    id: 'mk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mk.svg',
    name: 'Macedonia, the Former Yugoslav Republic Of',
  },
  {
    id: 'ml',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ml.svg',
    name: 'Mali',
  },
  {
    id: 'mm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mm.svg',
    name: 'Myanmar',
  },
  {
    id: 'mn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mn.svg',
    name: 'Mongolia',
  },
  {
    id: 'mo',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mo.svg',
    name: 'Macao',
  },
  {
    id: 'mp',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mp.svg',
    name: 'Northern Mariana Islands',
  },
  {
    id: 'mq',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mq.svg',
    name: 'Martinique',
  },
  {
    id: 'mr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mr.svg',
    name: 'Mauritania',
  },
  {
    id: 'ms',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ms.svg',
    name: 'Montserrat',
  },
  {
    id: 'mt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mt.svg',
    name: 'Malta',
  },
  {
    id: 'mu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mu.svg',
    name: 'Mauritius',
  },
  {
    id: 'mv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mv.svg',
    name: 'Maldives',
  },
  {
    id: 'mw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mw.svg',
    name: 'Malawi',
  },
  {
    id: 'mx',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mx.svg',
    name: 'Mexico',
  },
  {
    id: 'my',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/my.svg',
    name: 'Malaysia',
  },
  {
    id: 'mz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mz.svg',
    name: 'Mozambique',
  },
  {
    id: 'na',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/na.svg',
    name: 'Namibia',
  },
  {
    id: 'nc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nc.svg',
    name: 'New Caledonia',
  },
  {
    id: 'ne',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ne.svg',
    name: 'Niger',
  },
  {
    id: 'nf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nf.svg',
    name: 'Norfolk Island',
  },
  {
    id: 'ng',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ng.svg',
    name: 'Nigeria',
  },
  {
    id: 'ni',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ni.svg',
    name: 'Nicaragua',
  },
  {
    id: 'nl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nl.svg',
    name: 'Netherlands',
  },
  {
    id: 'no',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/no.svg',
    name: 'Norway',
  },
  {
    id: 'np',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/np.svg',
    name: 'Nepal',
  },
  {
    id: 'nr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nr.svg',
    name: 'Nauru',
  },
  {
    id: 'nu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nu.svg',
    name: 'Niue',
  },
  {
    id: 'nz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nz.svg',
    name: 'New Zealand',
  },
  {
    id: 'om',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/om.svg',
    name: 'Oman',
  },
  {
    id: 'pa',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pa.svg',
    name: 'Panama',
  },
  {
    id: 'pe',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pe.svg',
    name: 'Peru',
  },
  {
    id: 'pf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pf.svg',
    name: 'French Polynesia',
  },
  {
    id: 'pg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pg.svg',
    name: 'Papua New Guinea',
  },
  {
    id: 'ph',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ph.svg',
    name: 'Philippines',
  },
  {
    id: 'pk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg',
    name: 'Pakistan',
  },
  {
    id: 'pl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pl.svg',
    name: 'Poland',
  },
  {
    id: 'pm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pm.svg',
    name: 'Saint Pierre And Miquelon',
  },
  {
    id: 'pn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pn.svg',
    name: 'Pitcairn',
  },
  {
    id: 'pr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pr.svg',
    name: 'Puerto Rico',
  },
  {
    id: 'ps',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ps.svg',
    name: 'Palestine, State of',
  },
  {
    id: 'pt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pt.svg',
    name: 'Portugal',
  },
  {
    id: 'pw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pw.svg',
    name: 'Palau',
  },
  {
    id: 'py',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/py.svg',
    name: 'Paraguay',
  },
  {
    id: 'qa',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/qa.svg',
    name: 'Qatar',
  },
  {
    id: 're',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/re.svg',
    name: 'Réunion',
  },
  {
    id: 'ro',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ro.svg',
    name: 'Romania',
  },
  {
    id: 'rs',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/rs.svg',
    name: 'Serbia',
  },
  {
    id: 'ru',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ru.svg',
    name: 'Russian Federation',
  },
  {
    id: 'rw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/rw.svg',
    name: 'Rwanda',
  },
  {
    id: 'sa',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sa.svg',
    name: 'Saudi Arabia',
  },
  {
    id: 'sb',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sb.svg',
    name: 'Solomon Islands',
  },
  {
    id: 'sc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sc.svg',
    name: 'Seychelles',
  },
  {
    id: 'sd',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sd.svg',
    name: 'Sudan',
  },
  {
    id: 'se',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/se.svg',
    name: 'Sweden',
  },
  {
    id: 'sg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sg.svg',
    name: 'Singapore',
  },
  {
    id: 'sh',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sh.svg',
    name: 'Saint Helena',
  },
  {
    id: 'si',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/si.svg',
    name: 'Slovenia',
  },
  {
    id: 'sj',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sj.svg',
    name: 'Svalbard And Jan Mayen',
  },
  {
    id: 'sk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sk.svg',
    name: 'Slovakia',
  },
  {
    id: 'sl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sl.svg',
    name: 'Sierra Leone',
  },
  {
    id: 'sm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sm.svg',
    name: 'San Marino',
  },
  {
    id: 'sn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sn.svg',
    name: 'Senegal',
  },
  {
    id: 'so',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/so.svg',
    name: 'Somalia',
  },
  {
    id: 'sr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sr.svg',
    name: 'Suriname',
  },
  {
    id: 'ss',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ss.svg',
    name: 'South Sudan',
  },
  {
    id: 'st',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/st.svg',
    name: 'Sao Tome and Principe',
  },
  {
    id: 'sv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sv.svg',
    name: 'El Salvador',
  },
  {
    id: 'sx',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sx.svg',
    name: 'Sint Maarten',
  },
  {
    id: 'sy',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sy.svg',
    name: 'Syrian Arab Republic',
  },
  {
    id: 'sz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sz.svg',
    name: 'Swaziland',
  },
  {
    id: 'tc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tc.svg',
    name: 'Turks and Caicos Islands',
  },
  {
    id: 'td',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/td.svg',
    name: 'Chad',
  },
  {
    id: 'tf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tf.svg',
    name: 'French Southern Territories',
  },
  {
    id: 'tg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tg.svg',
    name: 'Togo',
  },
  {
    id: 'th',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/th.svg',
    name: 'Thailand',
  },
  {
    id: 'tj',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tj.svg',
    name: 'Tajikistan',
  },
  {
    id: 'tk',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tk.svg',
    name: 'Tokelau',
  },
  {
    id: 'tl',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tl.svg',
    name: 'Timor-Leste',
  },
  {
    id: 'tm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tm.svg',
    name: 'Turkmenistan',
  },
  {
    id: 'tn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tn.svg',
    name: 'Tunisia',
  },
  {
    id: 'to',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/to.svg',
    name: 'Tonga',
  },
  {
    id: 'tr',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tr.svg',
    name: 'Turkey',
  },
  {
    id: 'tt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tt.svg',
    name: 'Trinidad and Tobago',
  },
  {
    id: 'tv',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tv.svg',
    name: 'Tuvalu',
  },
  {
    id: 'tw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tw.svg',
    name: 'Taiwan, Republic Of China',
  },
  {
    id: 'tz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tz.svg',
    name: 'Tanzania, United Republic of',
  },
  {
    id: 'ua',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ua.svg',
    name: 'Ukraine',
  },
  {
    id: 'ug',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ug.svg',
    name: 'Uganda',
  },
  {
    id: 'um',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/um.svg',
    name: 'United States Minor Outlying Islands',
  },
  {
    id: 'us',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg',
    name: 'United States',
  },
  {
    id: 'uy',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/uy.svg',
    name: 'Uruguay',
  },
  {
    id: 'uz',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/uz.svg',
    name: 'Uzbekistan',
  },
  {
    id: 'va',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/va.svg',
    name: 'Holy See (Vatican City State)',
  },
  {
    id: 'vc',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vc.svg',
    name: 'Saint Vincent And The Grenadines',
  },
  {
    id: 've',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ve.svg',
    name: 'Venezuela, Bolivarian Republic of',
  },
  {
    id: 'vg',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vg.svg',
    name: 'Virgin Islands, British',
  },
  {
    id: 'vi',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vi.svg',
    name: 'Virgin Islands, U.S.',
  },
  {
    id: 'vn',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vn.svg',
    name: 'Vietnam',
  },
  {
    id: 'vu',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vu.svg',
    name: 'Vanuatu',
  },
  {
    id: 'wf',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/wf.svg',
    name: 'Wallis and Futuna',
  },
  {
    id: 'ws',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ws.svg',
    name: 'Samoa',
  },
  {
    id: 'ye',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ye.svg',
    name: 'Yemen',
  },
  {
    id: 'yt',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/yt.svg',
    name: 'Mayotte',
  },
  {
    id: 'za',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/za.svg',
    name: 'South Africa',
  },
  {
    id: 'zm',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/zm.svg',
    name: 'Zambia',
  },
  {
    id: 'zw',
    image: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/zw.svg',
    name: 'Zimbabwe',
  },
];

export default flags;