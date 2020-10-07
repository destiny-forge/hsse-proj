const countries = [
  { value: '0', label: 'Please select' },
  {
    value: '-23',
    label: 'No studies met the inclusion criteria set for the review',
  },
  {
    value: '-20',
    label: 'Not reported',
  },
  {
    value: '-6',
    label: 'Not typically presented in a systematic review being planned',
  },
  {
    value: '-5',
    label: 'Not typically presented in a systematic review in progress',
  },
  {
    value: '-2',
    label: 'Not typically presented in an overview',
  },
  {
    value: '-21',
    label: 'Not yet available',
  },
  {
    value: '1',
    label: 'Afghanistan',
  },
  {
    value: '209',
    label: 'Africa',
  },
  {
    value: '250',
    label: 'Africa, Asia &amp; Middle East',
  },
  {
    value: '232',
    label: 'Africa, Asia, Australia &amp; Europe',
  },
  {
    value: '2',
    label: 'Albania',
  },
  {
    value: '3',
    label: 'Algeria',
  },
  {
    value: '254',
    label: 'American Samoa',
  },
  {
    value: '4',
    label: 'Andorra',
  },
  {
    value: '5',
    label: 'Angola',
  },
  {
    value: '253',
    label: 'Anguilla',
  },
  {
    value: '6',
    label: 'Antigua and Barbuda',
  },
  {
    value: '7',
    label: 'Argentina',
  },
  {
    value: '8',
    label: 'Armenia',
  },
  {
    value: '267',
    label: 'ASEAN',
  },
  {
    value: '210',
    label: 'Asia',
  },
  {
    value: '231',
    label: 'Asia &amp; Europe',
  },
  {
    value: '242',
    label: 'Asia &amp; Middle East',
  },
  {
    value: '248',
    label: 'Asia, Australasia &amp; Europe',
  },
  {
    value: '215',
    label: 'Australasia',
  },
  {
    value: '9',
    label: 'Australia',
  },
  {
    value: '236',
    label: 'Australia or New Zealand',
  },
  {
    value: '249',
    label: 'Australia, New Zealand &amp; Oceania',
  },
  {
    value: '10',
    label: 'Austria',
  },
  {
    value: '227',
    label: 'Austria, Germany &amp; Switzerland',
  },
  {
    value: '11',
    label: 'Azerbaijan',
  },
  {
    value: '12',
    label: 'Bahamas',
  },
  {
    value: '13',
    label: 'Bahrain',
  },
  {
    value: '14',
    label: 'Bangladesh',
  },
  {
    value: '15',
    label: 'Barbados',
  },
  {
    value: '16',
    label: 'Belarus',
  },
  {
    value: '17',
    label: 'Belgium',
  },
  {
    value: '18',
    label: 'Belize',
  },
  {
    value: '19',
    label: 'Benin',
  },
  {
    value: '193',
    label: 'Bermuda',
  },
  {
    value: '20',
    label: 'Bhutan',
  },
  {
    value: '21',
    label: 'Bolivia',
  },
  {
    value: '22',
    label: 'Bosnia and Herzegovina',
  },
  {
    value: '23',
    label: 'Botswana',
  },
  {
    value: '24',
    label: 'Brazil',
  },
  {
    value: '241',
    label: 'Brazil &amp; South Africa',
  },
  {
    value: '268',
    label: 'BRICS',
  },
  {
    value: '25',
    label: 'Brunei Darussalam',
  },
  {
    value: '26',
    label: 'Bulgaria',
  },
  {
    value: '27',
    label: 'Burkina Faso',
  },
  {
    value: '28',
    label: 'Burundi',
  },
  {
    value: '29',
    label: 'Cambodia',
  },
  {
    value: '30',
    label: 'Cameroon',
  },
  {
    value: '31',
    label: 'Canada',
  },
  {
    value: '228',
    label: 'Canada & USA',
  },
  {
    value: '32',
    label: 'Cape Verde',
  },
  {
    value: '216',
    label: 'Caribbean',
  },
  {
    value: '226',
    label: 'Caribbean &amp; Latin America',
  },
  {
    value: '269',
    label: 'CARICOM',
  },
  {
    value: '33',
    label: 'Central African Republic',
  },
  {
    value: '251',
    label: 'Central America, Mexico &amp; South America',
  },
  {
    value: '34',
    label: 'Chad',
  },
  {
    value: '35',
    label: 'Chile',
  },
  {
    value: '36',
    label: 'China',
  },
  {
    value: '37',
    label: 'Colombia',
  },
  {
    value: '270',
    label: 'Commonwealth',
  },
  {
    value: '260',
    label: 'Commonwealth Of Northern Mariana Islands',
  },
  {
    value: '38',
    label: 'Comoros',
  },
  {
    value: '39',
    label: 'Congo - Brazzaville',
  },
  {
    value: '47',
    label: 'Congo - Kinshasa',
  },
  {
    value: '255',
    label: 'Cook Islands',
  },
  {
    value: '40',
    label: 'Costa Rica',
  },
  {
    value: '41',
    label: "Côte d'Ivoire",
  },
  {
    value: '42',
    label: 'Croatia',
  },
  {
    value: '43',
    label: 'Cuba',
  },
  {
    value: '44',
    label: 'Cyprus',
  },
  {
    value: '45',
    label: 'Czech Republic',
  },
  {
    value: '48',
    label: 'Denmark',
  },
  {
    value: '217',
    label: 'Developed countries',
  },
  {
    value: '218',
    label: 'Developing countries',
  },
  {
    value: '49',
    label: 'Djibouti',
  },
  {
    value: '50',
    label: 'Dominica',
  },
  {
    value: '51',
    label: 'Dominican Republic',
  },
  {
    value: '219',
    label: 'Eastern Europe',
  },
  {
    value: '52',
    label: 'Ecuador',
  },
  {
    value: '274',
    label: 'EFTA',
  },
  {
    value: '53',
    label: 'Egypt',
  },
  {
    value: '54',
    label: 'El Salvador',
  },
  {
    value: '55',
    label: 'Equatorial Guinea',
  },
  {
    value: '56',
    label: 'Eritrea',
  },
  {
    value: '57',
    label: 'Estonia',
  },
  {
    value: '58',
    label: 'Ethiopia',
  },
  {
    value: '211',
    label: 'Europe',
  },
  {
    value: '275',
    label: 'European Union',
  },
  {
    value: '59',
    label: 'Fiji',
  },
  {
    value: '60',
    label: 'Finland',
  },
  {
    value: '61',
    label: 'France',
  },
  {
    value: '234',
    label: 'France, Italy, Spain &amp; UK',
  },
  {
    value: '271',
    label: 'Francophonie',
  },
  {
    value: '194',
    label: 'French Polynesia',
  },
  {
    value: '273',
    label: 'G20',
  },
  {
    value: '272',
    label: 'G7',
  },
  {
    value: '62',
    label: 'Gabon',
  },
  {
    value: '63',
    label: 'Gambia',
  },
  {
    value: '64',
    label: 'Georgia',
  },
  {
    value: '65',
    label: 'Germany',
  },
  {
    value: '66',
    label: 'Ghana',
  },
  {
    value: '265',
    label: 'Global',
  },
  {
    value: '67',
    label: 'Greece',
  },
  {
    value: '68',
    label: 'Grenada',
  },
  {
    value: '256',
    label: 'Guam',
  },
  {
    value: '69',
    label: 'Guatemala',
  },
  {
    value: '70',
    label: 'Guinea',
  },
  {
    value: '229',
    label: 'Guinea &amp; Kenya',
  },
  {
    value: '71',
    label: 'Guinea-Bissau',
  },
  {
    value: '72',
    label: 'Guyana',
  },
  {
    value: '73',
    label: 'Haiti',
  },
  {
    value: '74',
    label: 'Honduras',
  },
  {
    value: '195',
    label: 'Hong Kong',
  },
  {
    value: '75',
    label: 'Hungary',
  },
  {
    value: '76',
    label: 'Iceland',
  },
  {
    value: '77',
    label: 'India',
  },
  {
    value: '240',
    label: 'India, Paraguay, Tanzania &amp; Uganda',
  },
  {
    value: '78',
    label: 'Indonesia',
  },
  {
    value: '79',
    label: 'Iran',
  },
  {
    value: '80',
    label: 'Iraq',
  },
  {
    value: '81',
    label: 'Ireland',
  },
  {
    value: '246',
    label: 'Ireland &amp; UK',
  },
  {
    value: '208',
    label: 'Ireland &amp; UK (Northern Ireland)',
  },
  {
    value: '82',
    label: 'Israel',
  },
  {
    value: '83',
    label: 'Italy',
  },
  {
    value: '84',
    label: 'Jamaica',
  },
  {
    value: '85',
    label: 'Japan',
  },
  {
    value: '86',
    label: 'Jordan',
  },
  {
    value: '87',
    label: 'Kazakhstan',
  },
  {
    value: '88',
    label: 'Kenya',
  },
  {
    value: '239',
    label: 'Kenya &amp; Tanzania',
  },
  {
    value: '89',
    label: 'Kiribati',
  },
  {
    value: '46',
    label: 'Korea - North',
  },
  {
    value: '138',
    label: 'Korea - South',
  },
  {
    value: '196',
    label: 'Kosovo',
  },
  {
    value: '90',
    label: 'Kuwait',
  },
  {
    value: '91',
    label: 'Kyrgyzstan',
  },
  {
    value: '92',
    label: 'Laos',
  },
  {
    value: '214',
    label: 'Latin America',
  },
  {
    value: '93',
    label: 'Latvia',
  },
  {
    value: '94',
    label: 'Lebanon',
  },
  {
    value: '95',
    label: 'Lesotho',
  },
  {
    value: '96',
    label: 'Liberia',
  },
  {
    value: '97',
    label: 'Libya',
  },
  {
    value: '98',
    label: 'Liechtenstein',
  },
  {
    value: '99',
    label: 'Lithuania',
  },
  {
    value: '247',
    label: 'Low income countries',
  },
  {
    value: '100',
    label: 'Luxembourg',
  },
  {
    value: '257',
    label: 'Macao',
  },
  {
    value: '170',
    label: 'Macedonia',
  },
  {
    value: '101',
    label: 'Madagascar',
  },
  {
    value: '102',
    label: 'Malawi',
  },
  {
    value: '103',
    label: 'Malaysia',
  },
  {
    value: '104',
    label: 'Maldives',
  },
  {
    value: '105',
    label: 'Mali',
  },
  {
    value: '106',
    label: 'Malta',
  },
  {
    value: '107',
    label: 'Marshall Islands',
  },
  {
    value: '108',
    label: 'Mauritania',
  },
  {
    value: '109',
    label: 'Mauritius',
  },
  {
    value: '110',
    label: 'Mexico',
  },
  {
    value: '111',
    label: 'Micronesia',
  },
  {
    value: '220',
    label: 'Middle East',
  },
  {
    value: '139',
    label: 'Moldova',
  },
  {
    value: '112',
    label: 'Monaco',
  },
  {
    value: '113',
    label: 'Mongolia',
  },
  {
    value: '114',
    label: 'Montenegro',
  },
  {
    value: '252',
    label: 'Montserrat',
  },
  {
    value: '115',
    label: 'Morocco',
  },
  {
    value: '225',
    label: 'Mostly from USA',
  },
  {
    value: '116',
    label: 'Mozambique',
  },
  {
    value: '117',
    label: 'Myanmar',
  },
  {
    value: '118',
    label: 'Namibia',
  },
  {
    value: '119',
    label: 'Nauru',
  },
  {
    value: '120',
    label: 'Nepal',
  },
  {
    value: '121',
    label: 'Netherlands',
  },
  {
    value: '245',
    label: 'Netherlands &amp; UK',
  },
  {
    value: '258',
    label: 'New Caledonia',
  },
  {
    value: '122',
    label: 'New Zealand',
  },
  {
    value: '123',
    label: 'Nicaragua',
  },
  {
    value: '124',
    label: 'Niger',
  },
  {
    value: '125',
    label: 'Nigeria',
  },
  {
    value: '259',
    label: 'Niue',
  },
  {
    value: '212',
    label: 'North America',
  },
  {
    value: '197',
    label: 'Northern Mariana Islands',
  },
  {
    value: '126',
    label: 'Norway',
  },
  {
    value: '221',
    label: 'OECD',
  },
  {
    value: '127',
    label: 'Oman',
  },
  {
    value: '276',
    label: 'OPEC',
  },
  {
    value: '264',
    label: 'Other',
  },
  {
    value: '128',
    label: 'Pakistan',
  },
  {
    value: '129',
    label: 'Palau',
  },
  {
    value: '198',
    label: 'Palestine',
  },
  {
    value: '130',
    label: 'Panama',
  },
  {
    value: '131',
    label: 'Papua New Guinea',
  },
  {
    value: '132',
    label: 'Paraguay',
  },
  {
    value: '133',
    label: 'Peru',
  },
  {
    value: '134',
    label: 'Philippines',
  },
  {
    value: '261',
    label: 'Pitcairn Islands',
  },
  {
    value: '135',
    label: 'Poland',
  },
  {
    value: '136',
    label: 'Portugal',
  },
  {
    value: '199',
    label: 'Puerto Rico',
  },
  {
    value: '137',
    label: 'Qatar',
  },
  {
    value: '140',
    label: 'Romania',
  },
  {
    value: '141',
    label: 'Russia',
  },
  {
    value: '142',
    label: 'Rwanda',
  },
  {
    value: '277',
    label: 'SAARC',
  },
  {
    value: '143',
    label: 'Saint Kitts and Nevis',
  },
  {
    value: '144',
    label: 'Saint Lucia',
  },
  {
    value: '145',
    label: 'Saint Vincent and the Grenadines',
  },
  {
    value: '146',
    label: 'Samoa',
  },
  {
    value: '147',
    label: 'San Marino',
  },
  {
    value: '148',
    label: 'Sao Tome and Principe',
  },
  {
    value: '149',
    label: 'Saudi Arabia',
  },
  {
    value: '207',
    label: 'Scandinavia',
  },
  {
    value: '150',
    label: 'Senegal',
  },
  {
    value: '151',
    label: 'Serbia',
  },
  {
    value: '152',
    label: 'Seychelles',
  },
  {
    value: '153',
    label: 'Sierra Leone',
  },
  {
    value: '154',
    label: 'Singapore',
  },
  {
    value: '155',
    label: 'Slovakia',
  },
  {
    value: '156',
    label: 'Slovenia',
  },
  {
    value: '157',
    label: 'Solomon Islands',
  },
  {
    value: '158',
    label: 'Somalia',
  },
  {
    value: '159',
    label: 'South Africa',
  },
  {
    value: '235',
    label: 'South Africa &amp; Zimbabwe',
  },
  {
    value: '213',
    label: 'South America',
  },
  {
    value: '266',
    label: 'South Sudan',
  },
  {
    value: '160',
    label: 'Spain',
  },
  {
    value: '238',
    label: 'Spain &amp; UK',
  },
  {
    value: '161',
    label: 'Sri Lanka',
  },
  {
    value: '222',
    label: 'Sub-Saharan Africa',
  },
  {
    value: '162',
    label: 'Sudan',
  },
  {
    value: '163',
    label: 'Suriname',
  },
  {
    value: '164',
    label: 'Swaziland',
  },
  {
    value: '166',
    label: 'Sweden',
  },
  {
    value: '165',
    label: 'Switzerland',
  },
  {
    value: '167',
    label: 'Syrian Arab Republic',
  },
  {
    value: '200',
    label: 'Taiwan',
  },
  {
    value: '168',
    label: 'Tajikistan',
  },
  {
    value: '183',
    label: 'Tanzania',
  },
  {
    value: '169',
    label: 'Thailand',
  },
  {
    value: '171',
    label: 'Timor-Leste',
  },
  {
    value: '172',
    label: 'Togo',
  },
  {
    value: '262',
    label: 'Tokelau',
  },
  {
    value: '173',
    label: 'Tonga',
  },
  {
    value: '174',
    label: 'Trinidad and Tobago',
  },
  {
    value: '175',
    label: 'Tunisia',
  },
  {
    value: '176',
    label: 'Turkey',
  },
  {
    value: '177',
    label: 'Turkmenistan',
  },
  {
    value: '178',
    label: 'Tuvalu',
  },
  {
    value: '181',
    label: 'UAE',
  },
  {
    value: '179',
    label: 'Uganda',
  },
  {
    value: '182',
    label: 'UK',
  },
  {
    value: '237',
    label: 'UK &amp; USA',
  },
  {
    value: '243',
    label: 'UK (England &amp; Wales)',
  },
  {
    value: '201',
    label: 'UK (England)',
  },
  {
    value: '202',
    label: 'UK (Northern Ireland)',
  },
  {
    value: '203',
    label: 'UK (Scotland)',
  },
  {
    value: '204',
    label: 'UK (Wales)',
  },
  {
    value: '180',
    label: 'Ukraine',
  },
  {
    value: '185',
    label: 'Uruguay',
  },
  {
    value: '184',
    label: 'USA',
  },
  {
    value: '186',
    label: 'Uzbekistan',
  },
  {
    value: '187',
    label: 'Vanuatu',
  },
  {
    value: '188',
    label: 'Venezuela',
  },
  {
    value: '189',
    label: 'Viet Nam',
  },
  {
    value: '263',
    label: 'Wallis and Futuna',
  },
  {
    value: '223',
    label: 'West Bank',
  },
  {
    value: '233',
    label: 'Western countries',
  },
  {
    value: '190',
    label: 'Yemen',
  },
  {
    value: '205',
    label: 'Yugoslavia',
  },
  {
    value: '191',
    label: 'Zambia',
  },
  {
    value: '192',
    label: 'Zimbabwe',
  },
];

export { countries };
