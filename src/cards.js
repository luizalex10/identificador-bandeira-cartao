/**
 * Verifica se o número informado pertence à bandeira MasterCard.
 * MasterCard começa com 51-55 ou 2221-2720 e possui 16 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for MasterCard, false caso contrário.
 */
function isMasterCard(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 16 dígitos
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    // Extrai os primeiros 6 dígitos
    const firstTwo = parseInt(cardNumber.slice(0, 2), 10);
    const firstFour = parseInt(cardNumber.slice(0, 4), 10);

    // Verifica faixas válidas para MasterCard
    if ((firstTwo >= 51 && firstTwo <= 55) ||
        (firstFour >= 2221 && firstFour <= 2720)) {
        return true;
    }

    return false;
}

/**
 * Verifica se o número informado pertence à bandeira Visa.
 * Visa começa com 4 e possui 16 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for Visa, false caso contrário.
 */
function isVisa(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 16 dígitos e começa com 4
    return /^\d{16}$/.test(cardNumber) && cardNumber.startsWith('4');
}

/**
 * Verifica se o número informado pertence à bandeira American Express.
 * American Express começa com 34 ou 37 e possui 15 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for American Express, false caso contrário.
 */
function isAmericanExpress(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 15 dígitos e começa com 34 ou 37
    return /^\d{15}$/.test(cardNumber) &&
           (cardNumber.startsWith('34') || cardNumber.startsWith('37'));
}

/**
 * Verifica se o número informado pertence à bandeira Diners Club.
 * Diners Club começa com 301, 305, 36 ou 38 e possui 14 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for Diners Club, false caso contrário.
 */
function isDinersClub(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 14 dígitos
    if (!/^\d{14}$/.test(cardNumber)) {
        return false;
    }

    // Extrai os primeiros 3 e 2 dígitos
    const firstThree = cardNumber.slice(0, 3);
    const firstTwo = cardNumber.slice(0, 2);

    // Verifica faixas válidas para Diners Club
    return (
        firstThree === '301' ||
        firstThree === '305' ||
        firstTwo === '36' ||
        firstTwo === '38'
    );
}

/**
 * Verifica se o número informado pertence à bandeira Discover.
 * Discover começa com 6011, 65 ou de 644 a 649 e possui 16 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for Discover, false caso contrário.
 */
function isDiscover(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 16 dígitos
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    const firstFour = cardNumber.slice(0, 4);
    const firstThree = cardNumber.slice(0, 3);
    const firstTwo = cardNumber.slice(0, 2);

    // Verifica faixas válidas para Discover
    return (
        firstFour === '6011' ||
        firstTwo === '65' ||
        (parseInt(firstThree, 10) >= 644 && parseInt(firstThree, 10) <= 649)
    );
}

/**
 * Verifica se o número informado pertence à bandeira EnRoute.
 * EnRoute começa com 2014 ou 2149 e possui 15 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for EnRoute, false caso contrário.
 */
function isEnRoute(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 15 dígitos
    if (!/^\d{15}$/.test(cardNumber)) {
        return false;
    }

    const firstFour = cardNumber.slice(0, 4);

    // Verifica se começa com 2014 ou 2149
    return firstFour === '2014' || firstFour === '2149';
}

/**
 * Verifica se o número informado pertence à bandeira JCB.
 * JCB começa de 3528 a 3589 e possui 16 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for JCB, false caso contrário.
 */
function isJCB(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 16 dígitos
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    const firstFour = parseInt(cardNumber.slice(0, 4), 10);

    // Verifica se está na faixa de 3528 a 3589
    return firstFour >= 3528 && firstFour <= 3589;
}

/**
 * Verifica se o número informado pertence à bandeira Voyager.
 * Voyager começa com 8699 e possui 15 dígitos.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for Voyager, false caso contrário.
 */
function isVoyager(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se tem 15 dígitos
    if (!/^\d{15}$/.test(cardNumber)) {
        return false;
    }

    // Verifica se começa com 8699
    return cardNumber.startsWith('8699');
}

/**
 * Verifica se o número informado pertence à bandeira HiperCard.
 * HiperCard começa com 606282, 637095, 637568, 637599, 637609 ou 637612.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for HiperCard, false caso contrário.
 */
function isHiperCard(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Regex para os prefixos conhecidos do HiperCard
    const regex = /^(606282|637095|637568|637599|637609|637612)/;

    // Verifica se começa com um dos prefixos
    return regex.test(cardNumber);
}

/**
 * Verifica se o número informado pertence à bandeira Aura.
 * Aura começa com 50.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {boolean} true se for Aura, false caso contrário.
 */
function isAura(cardNumber) {
    // Garante que cardNumber é uma string e remove espaços
    cardNumber = String(cardNumber).replace(/\s+/g, '');

    // Verifica se começa com 50
    return cardNumber.startsWith('50');
}

/**
 * Retorna o nome da bandeira do cartão, caso reconhecida.
 * Testa o número informado em todas as funções de bandeira.
 * @param {string|number} cardNumber - Número do cartão a ser verificado.
 * @returns {string|null} Nome da bandeira ou null se não reconhecida.
 */
function getCardBrand(cardNumber) {
    if (isMasterCard(cardNumber)) return 'MasterCard';
    if (isVisa(cardNumber)) return 'Visa';
    if (isAmericanExpress(cardNumber)) return 'American Express';
    if (isDinersClub(cardNumber)) return 'Diners Club';
    if (isDiscover(cardNumber)) return 'Discover';
    if (isEnRoute(cardNumber)) return 'EnRoute';
    if (isJCB(cardNumber)) return 'JCB';
    if (isVoyager(cardNumber)) return 'Voyager';
    if (isHiperCard(cardNumber)) return 'HiperCard';
    if (isAura(cardNumber)) return 'Aura';
    return null; // Nenhuma bandeira reconhecida
}

// console.log(getCardBrand('4111111111111111')); // Visa
// console.log(getCardBrand('6011111111111117')); // Discover
// console.log(getCardBrand('5078601870000127980')); // Aura
// console.log(getCardBrand('1234567890123456')); // null
