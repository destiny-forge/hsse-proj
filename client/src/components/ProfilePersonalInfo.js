import Context from './Context';
import { useState, useEffect } from 'react';
import ProfileService from '../services/ProfileService';

let CLIENT_ROLES = [
  'Student',
  'Researcher',
  'Professional',
  'Manager',
  'Policymaker',
  'Other',
];

const ProfilePersonalInfo = ({ t, user, getProfile }) => {
  const Profile = ProfileService();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [roles, setRoles] = useState([]);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [clientRoles, setClientRoles] = useState(CLIENT_ROLES);

  const toggleRole = (e) => {
    const role = e.target.value;
    let new_roles = roles;
    let index = new_roles.indexOf(role);
    if (e.target.checked && index === -1) {
      new_roles.push(role);
    } else if (!e.target.checked) {
      new_roles.splice(index, 1);
    }
    setRoles(new_roles);
    setClientRoles([...CLIENT_ROLES]);
  };

  useEffect(() => {
    if (user !== null) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setCountry(user.country || '');
      setLanguage(user.language || 'en');
      setRoles(user.client_roles || []);
    }
  }, [user]);

  const save = (e) => {
    e.preventDefault();
    setError(null);

    const info = {
      id: user._id,
      firstName,
      lastName,
      language,
      country,
      roles,
    };
    Profile.edit(info)
      .then((res) => {
        if (res) {
          getProfile();
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const toggle = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  return (
    <form className="editable-information" onSubmit={save}>
      <h2>{t('profile_page.personal_information')}</h2>
      <a href="save" rel="alternate" className="btn-toggle" onClick={toggle}>
        {editing ? t('profile_page.cancel') : t('profile_page.edit')}
      </a>
      {editing ? (
        <div>
          <div className="form-group has-feedback">
            <input
              type="text"
              placeholder={t('profile_page.first_name')}
              name="first_name"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              type="text"
              placeholder={t('profile_page.last_name')}
              name="last_name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <select
            label={t('profile_page.country')}
            name="country_id"
            type="select"
            className="form-control form-group"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            <option value="1">Afghanistan</option>
            <option value="2">Albania</option>
            <option value="3">Algeria</option>
            <option value="4">Andorra</option>
            <option value="5">Angola</option>
            <option value="6">Antigua and Barbuda</option>
            <option value="7">Argentina</option>
            <option value="8">Armenia</option>
            <option value="9">Australia</option>
            <option value="10">Austria</option>
            <option value="11">Azerbaijan</option>
            <option value="12">Bahamas</option>
            <option value="13">Bahrain</option>
            <option value="14">Bangladesh</option>
            <option value="15">Barbados</option>
            <option value="16">Belarus</option>
            <option value="17">Belgium</option>
            <option value="18">Belize</option>
            <option value="19">Benin</option>
            <option value="20">Bhutan</option>
            <option value="21">Bolivia (Plurinational State of)</option>
            <option value="22">Bosnia and Herzegovina</option>
            <option value="23">Botswana</option>
            <option value="24">Brazil</option>
            <option value="25">Brunei Darussalam</option>
            <option value="26">Bulgaria</option>
            <option value="27">Burkina Faso</option>
            <option value="28">Burundi</option>
            <option value="29">Cambodia</option>
            <option value="30">Cameroon</option>
            <option value="31">Canada</option>
            <option value="32">Cape Verde</option>
            <option value="33">Central African Republic</option>
            <option value="34">Chad</option>
            <option value="35">Chile</option>
            <option value="36">China</option>
            <option value="37">Colombia</option>
            <option value="38">Comoros</option>
            <option value="39">Congo (Brazzaville)</option>
            <option value="47">Congo (Democratic Republic of)</option>
            <option value="40">Costa Rica</option>
            <option value="41">Côte d'Ivoire</option>
            <option value="42">Croatia</option>
            <option value="43">Cuba</option>
            <option value="44">Cyprus</option>
            <option value="45">Czech Republic</option>
            <option value="48">Denmark</option>
            <option value="49">Djibouti</option>
            <option value="50">Dominica</option>
            <option value="51">Dominican Republic</option>
            <option value="52">Ecuador</option>
            <option value="53">Egypt</option>
            <option value="54">El Salvador</option>
            <option value="55">Equatorial Guinea</option>
            <option value="56">Eritrea</option>
            <option value="57">Estonia</option>
            <option value="58">Ethiopia</option>
            <option value="59">Fiji</option>
            <option value="60">Finland</option>
            <option value="61">France</option>
            <option value="62">Gabon</option>
            <option value="63">Gambia</option>
            <option value="64">Georgia</option>
            <option value="65">Germany</option>
            <option value="66">Ghana</option>
            <option value="67">Greece</option>
            <option value="68">Grenada</option>
            <option value="69">Guatemala</option>
            <option value="70">Guinea</option>
            <option value="71">Guinea-Bissau</option>
            <option value="72">Guyana</option>
            <option value="73">Haiti</option>
            <option value="74">Honduras</option>
            <option value="75">Hungary</option>
            <option value="76">Iceland</option>
            <option value="77">India</option>
            <option value="78">Indonesia</option>
            <option value="79">Iran (Islamic Republic of)</option>
            <option value="80">Iraq</option>
            <option value="81">Ireland</option>
            <option value="82">Israel</option>
            <option value="83">Italy</option>
            <option value="84">Jamaica</option>
            <option value="85">Japan</option>
            <option value="86">Jordan</option>
            <option value="87">Kazakhstan</option>
            <option value="88">Kenya</option>
            <option value="89">Kiribati</option>
            <option value="46">Korea (Democratic People's Republic of)</option>
            <option value="138">Korea (Republic of)</option>
            <option value="90">Kuwait</option>
            <option value="91">Kyrgyzstan</option>
            <option value="92">Lao People's Democratic Republic</option>
            <option value="93">Latvia</option>
            <option value="94">Lebanon</option>
            <option value="95">Lesotho</option>
            <option value="96">Liberia</option>
            <option value="97">Libya</option>
            <option value="98">Liechtenstein</option>
            <option value="99">Lithuania</option>
            <option value="100">Luxembourg</option>
            <option value="170">
              Macedonia (The former Yugoslav Republic of)
            </option>
            <option value="101">Madagascar</option>
            <option value="102">Malawi</option>
            <option value="103">Malaysia</option>
            <option value="104">Maldives</option>
            <option value="105">Mali</option>
            <option value="106">Malta</option>
            <option value="107">Marshall Islands</option>
            <option value="108">Mauritania</option>
            <option value="109">Mauritius</option>
            <option value="110">Mexico</option>
            <option value="111">Micronesia (Federated States of)</option>
            <option value="139">Moldova (Republic of)</option>
            <option value="112">Monaco</option>
            <option value="113">Mongolia</option>
            <option value="114">Montenegro</option>
            <option value="115">Morocco</option>
            <option value="116">Mozambique</option>
            <option value="117">Myanmar</option>
            <option value="118">Namibia</option>
            <option value="119">Nauru</option>
            <option value="120">Nepal</option>
            <option value="121">Netherlands</option>
            <option value="122">New Zealand</option>
            <option value="123">Nicaragua</option>
            <option value="124">Niger</option>
            <option value="125">Nigeria</option>
            <option value="126">Norway</option>
            <option value="127">Oman</option>
            <option value="128">Pakistan</option>
            <option value="129">Palau</option>
            <option value="130">Panama</option>
            <option value="131">Papua New Guinea</option>
            <option value="132">Paraguay</option>
            <option value="133">Peru</option>
            <option value="134">Philippines</option>
            <option value="135">Poland</option>
            <option value="136">Portugal</option>
            <option value="137">Qatar</option>
            <option value="140">Romania</option>
            <option value="141">Russian Federation</option>
            <option value="142">Rwanda</option>
            <option value="143">Saint Kitts and Nevis</option>
            <option value="144">Saint Lucia</option>
            <option value="145">Saint Vincent and the Grenadines</option>
            <option value="146">Samoa</option>
            <option value="147">San Marino</option>
            <option value="148">Sao Tome and Principe</option>
            <option value="149">Saudi Arabia</option>
            <option value="150">Senegal</option>
            <option value="151">Serbia</option>
            <option value="152">Seychelles</option>
            <option value="153">Sierra Leone</option>
            <option value="154">Singapore</option>
            <option value="155">Slovakia</option>
            <option value="156">Slovenia</option>
            <option value="157">Solomon Islands</option>
            <option value="158">Somalia</option>
            <option value="159">South Africa</option>
            <option value="266">South Sudan</option>
            <option value="160">Spain</option>
            <option value="161">Sri Lanka</option>
            <option value="162">Sudan</option>
            <option value="163">Suriname</option>
            <option value="164">Swaziland</option>
            <option value="166">Sweden</option>
            <option value="165">Switzerland</option>
            <option value="167">Syrian Arab Republic</option>
            <option value="168">Tajikistan</option>
            <option value="183">Tanzania (United Republic of)</option>
            <option value="169">Thailand</option>
            <option value="171">Timor-Leste</option>
            <option value="172">Togo</option>
            <option value="173">Tonga</option>
            <option value="174">Trinidad and Tobago</option>
            <option value="175">Tunisia</option>
            <option value="176">Turkey</option>
            <option value="177">Turkmenistan</option>
            <option value="178">Tuvalu</option>
            <option value="179">Uganda</option>
            <option value="180">Ukraine</option>
            <option value="181">United Arab Emirates</option>
            <option value="182">United Kingdom</option>
            <option value="184">United States</option>
            <option value="185">Uruguay</option>
            <option value="186">Uzbekistan</option>
            <option value="187">Vanuatu</option>
            <option value="188">Venezuela (Bolivarian Republic of)</option>
            <option value="189">Viet Nam</option>
            <option value="190">Yemen</option>
            <option value="191">Zambia</option>
            <option value="192">Zimbabwe</option>
            <option value="264">Other</option>
          </select>
          <select
            label={t('profile_page.language')}
            name="language"
            type="select"
            className="form-control form-group"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <div className="form-group update-role">
            <span>{t('profile_page.role_update_profile')}</span>
            {clientRoles.map((role, i) => {
              return (
                <label key={i} className="role">
                  <input
                    type="checkbox"
                    className="selectRole"
                    value={role.toLowerCase()}
                    name="role"
                    checked={roles.includes(role.toLowerCase())}
                    onChange={toggleRole}
                  />
                  <span>{role}</span>
                </label>
              );
            })}
          </div>
          <button onClick={save}>{t('update_information')}</button>

          {error && <div className="">{error}</div>}
        </div>
      ) : (
        <div>
          <div className="readonly-field readonly-field-first_name">
            <div className="readonly-field-label">
              {t('profile_page.first_name')}
            </div>
            <div className="readonly-field-value">{firstName}</div>
          </div>
          <div className="readonly-field readonly-field-last_name">
            <div className="readonly-field-label">
              {t('profile_page.last_name')}
            </div>
            <div className="readonly-field-value">{lastName}</div>
          </div>
          <div className="readonly-field readonly-field-country_id">
            <div className="readonly-field-label">
              {t('profile_page.country')}
            </div>
            <div className="readonly-field-value">{country}</div>
          </div>
          <div className="readonly-field readonly-field-language">
            <div className="readonly-field-label">
              {t('profile_page.language')}
            </div>
            <div className="readonly-field-value">{language}</div>
          </div>
          <div className="readonly-field readonly-field-role">
            <div className="readonly-field-label">{t('profile_page.role')}</div>
            <div className="readonly-field-value">{roles}</div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Context(ProfilePersonalInfo);
