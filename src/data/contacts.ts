export const offices = [
 {city:'Gioiosa Ionica',street:'Traversa I Via Gramsci 2',postal:'89042 Gioiosa Ionica (RC)'},
 {city:'Reggio Calabria',street:'C/so Garibaldi 468/b — Galleria Zaffino',postal:'89127 Reggio Calabria'},
 {city:'Reggio Calabria',street:'Via Scala di Giuda 115',postal:'89128 Reggio Calabria (RC)'},
 {city:'Roma',street:'Via Giuseppe Mazzini 55',postal:'00192 Roma'},
 {city:'Milano',street:'Via Edmondo de Amicis 61',postal:'20123 Milano'},
];
export const phones = [
 {label:'Reggio Calabria',display:'+39 0965 890508',href:'tel:+390965890508'},
 {label:'Roma',display:'+39 06 45225671',href:'tel:+390645225671'},
 {label:'Milano',display:'+39 02 93663813',href:'tel:+390293663813'},
 {label:'Mobile',display:'+39 333 1993273',href:'tel:+393331993273'},
];
export const emails=['info@aclawfirm.eu','avvcircosta@aclawfirm.eu','natasa.circosta@aclawfirm.eu','avvcircosta@gmail.com'];
export const pec='avvcircosta@legpec.it';

/**
 * Contact form.
 * web3formsKey: the "Access Key" created free at https://web3forms.com with the address that must
 * RECEIVE the enquiries (to change the address, create a new key with the new email).
 * It is designed to be public, so it can stay in the code. It can also be set at build time with
 * the VITE_WEB3FORMS_KEY variable. If empty, the form falls back to opening a draft in the visitor's mail app.
 */
export const contactForm = {
  web3formsKey: (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || '',
  fallbackEmail: 'info@aclawfirm.eu',
};
