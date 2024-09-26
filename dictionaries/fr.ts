export const frDictionary = {
    navigation: {
        auth: {
            signin: {
                title: "Connection",
                buttonText: "Se connecter avec Google",
                contact: "Un problème\u00A0? Contactez-la DSI"
            },
            signout: {
                title: "Déconnection",
                buttonText: "Se déconnecter",
                contact: "Un problème\u00A0? Contactez-la DSI"
            }
        },
        errors: {
            unauthorized: {
                title: "Accès non autorisé",
                description: "Vous devez être connecté pour accéder à cette page",
                button: "Login",
                contact: null
            },
            forbidden: {
                title: "Accès interdit",
                description: "Vous ne disposez pas des autorisations nécessaires pour accéder à cette page. Veuillez contacter l'administrateur",
                button: "Retourner à la page d'accueil",
                contact: "Demandez les droits d'accès"
            },
            notfound: {
                title: "Page non trouvée",
                description: "La page que vous recherchez n'existe pas. Veuillez vérifier l'URL ou retourner à la page d'accueil",
                button: "Retourner à la page d'accueil",
                contact: null
            },
            unknown: {
                title: "Erreur inattendue",
                description: "Veuillez réessayer plus tard ou nous contacter",
                button: "Retourner à la page d'accueil",
                contact: "Signaler un problème"
            },
            httpError: "Erreur HTTP"
        },
        admin: {
            validate: "Valider des posts",
            newblog: "Nouveau blog",
            edit: "Modifier des posts",
            form: "Soumissions au form",
            users: "Gestion des utilisateurs",
            account: "Mon compte"
        },
        sitemap: {
            title: "Plan du site",
            whoarewe: "Qui sommes-nous\u00A0?",
            home: "Page d'accueil",
            about: "À propos",
            commitment: "Nos engagements",
            team: "Notre équipe",
            partners: "Nos partenaires",
            company_partners: "Entreprises partenaires",
            offer: "Notre offre",
            example_offers: "Exemple d'offres",
            contact_information: "Contact & Informations",
            contact_form: "Formulaire de contact",
            blog: "Blog",
            legal_mentions: "Mentions légales",
            login: "Connexion",
            logout: "Déconnexion",
            ieseg: "IESEG Conseil Paris",
            contact: "Contactez-nous",
            bug: "Signaler un bug"
        }
    },
    pages: {
        blog: {
            title: "Nos actualités",
            date: {
                posted_by: "Posté par",
                on: "le"
            },
            labelSelector: { title: "Filtrer par étiquette", selectorMessage: "Sélectionnez-en au plus 3" }
        },
        home: {
            trust: "Ils nous ont fait confiance",
            description:
                "Telecom Etude, fondée en 1979, est la Junior-Entreprise de Télécom Paris, une école d'ingénieur de premier plan dans les technologies de l'information et du numérique. Connectez-vous avec notre équipe réactive et professionnelle de 33 administrateurs pour des solutions sur mesure à vos projets. Explorez l'expertise de Telecom Etude et engagez-vous avec plus de 1000 ingénieurs étudiants de Télécom Paris.",
            questions: "Plus de questions",
            subtitle: "La Junior Entreprise du numérique, des nouvelles technologies et de la data",
            alt: "Photo du mandat de Telecom Etude",
            whoarewe: "Qui sommes-nous ?",
            contact: "Contact us",
            cnje: [
                "Les Junior-Entreprises sont des associations pédagogiques de conseil de loi 1901 ayant pour objet social la montée en compétences des étudiants à travers la réalisation de prestations de service pour des professionnels.",
                "Ces structures sont implantées au sein d'établissements de l'enseignement supérieur. Elles proposent des services de qualité aux entreprises et permettent aux étudiants de développer leurs savoirs en mettant en pratique leur formation afin de répondre aux besoins des clients."
            ],
            numbers: {
                title: "Telecom Etude en quelques chiffres",
                clients: "Clients satisfaits",
                projects: "Projets chaque année",
                years: "Années d'expérience",
                pupils: "Élèves ingénieurs qualifés",
                admins: "Administrateurs à votre écoute"
            },
            domains: {
                subtitle: "Nous trouvons une réponse à chacun de vos besoins",
                description: "Notre expértise et nos compétences s'étendent sur une vaste étendue du numérique, dont voici quelques examples:",
                title: "Nos domaines de prédilection",
                data: "Data science, Intelligence artificielle & Machine learning",
                web: "Développement Logiciel, Applications & Web",
                cyber: "Cybersécurité, Réseaux, Cryptographie & Blockchain",
                image: "Traitement d'images & Modélisation 3D",
                market: "Études de marchés, États de l'art & Audits",
                se: "Système embarqués"
            }
        },
        team: {
            title: "Notre équipe",
            alt: {
                before: "Photo de",
                after: "de Telecom Etude"
            },
            poles: {
                board: "Le bureau",
                devco: "Pôle développement commercial",
                auditqua: "Pôle audit et qualité",
                event: "Pôle évenementiel",
                info: "Pôle informatique",
                com: "Pôle communication",
                suivi: "Pôle suivi des études"
            },
            members: {
                prez: "Présidente",
                trez: "Trésorière",
                vicetrez: "Vice-trésorière",
                vpi: "Vice-président interne",
                vpe: "Vice-président externe",
                secge: "Secrétaire général",
                dirco: "Directrice commerciale",
                //
                respodevco: "Responsable Développement Commercial",
                respoaudit: "Responsable Audit",
                respocom: "Responsable Communication",
                resposuivi: "Responsable Suivi des Etudes",
                respoevent: "Responsable Evènements",
                respoquality: "Responsable Qualité",
                respoinfo: "Responsable Informatique",
                //
                appel: "Chargé appel d'offre",
                alumni: "Chargé alumni",
                international: "Chargé international",
                selectionCDP: "Chargé Sélection CDP",
                processus: "Chargé de revue des processus",
                templates: "Chargé templates",
                pots: "Chargé Pots",
                teambuildings: "Chargé Cohésion",
                linkedin: "Chargé Linkedin",
                insta: "Chargé Instagram",
                formations: "Chargé formations",
                cominterne: "Chargé Communication Interne",
                //
                devco: "Membre pôle développement commercial",
                info: "Membre pôle informatique",
                suivi: "Membre pôle suivi des études",
                audit: "Membre pôle audit"
            }
        },
        faq: {
            title: "Foire aux questions",
            text: {
                before: "Voici les réponses aux questions que vous pourriez vous poser. N'hésitez pas à nous contacter à",
                between: "ou en remplissant ",
                form: "le formulaire de contact",
                after: "si vous avez d'autres questions ou pour avoir plus d'informations."
            },
            list: [
                {
                    question: "Qu'est-ce qu'une Junior-Entreprise\u00A0?",
                    answer: [
                        "Une Junior-Entreprise est une association d'étudiants à but pédagogique et non lucratif qui propose des services professionnels dans leur domaine d'études. Dans le cas de Telecom Etude, nous vendons des services dans le domaine du numérique, princpalement dans les domaines de la data, du développement, de la cybersécurité, du traitement d'image et du marketing."
                    ]
                },
                {
                    question: "Comment fonctionnent-elles\u00A0?",
                    answer: [
                        "Elles fonctionnent par missions. Vous nous soumettez un projet et nous réalisons une proposition. Une fois la proposition acceptée, nous réalisons sélectionnons un intervenant parmi un peu moins de 1000 élèves-ingénieurs par les compétences particulères nécessitées par la mission. C'est cet intervenant qui réalisera le projet que vous nous soumettez."
                    ]
                },
                {
                    question: "Par qui sera réalisé mon projet\u00A0?",
                    answer: [
                        "Nous sélectionnons soigneusement un étudiant de Télécom Paris qui a les compétences particulières nécessaires pour réaliser la mission. Dans une majorité des cas, l'intervenant suit des filières de niveau master ou plus élevé dans le domaine en plus de connaissances personnelles qu'il/elle a pu acquérir."
                    ]
                },
                {
                    question: "Pourquoi nous choisir\u00A0?",
                    answer: [
                        "Vous devriez nous choisir pour notre expertise dans notre domaine, notre réactivité à vos contacts et notre dévouement à fournir un excellent service. En plus de cela, nous sommes la Junior-Entreprise de la première école du numériquee en France, ce qui fait de nous la Junior-Entreprise de choix pour toute mission dans les domaines connexes."
                    ]
                },
                {
                    question: "Comment se déroule une mission\u00A0?",
                    answer: [
                        "Une mission commence par une discussion avec le client pour comprendre ses besoins, puis nous vous proposons une offre commerciale. Après des réunions pour bien connaitre vos besoins, nous sélectionnons un intervenant compétent qui va réalisé la mission. Le client est tenu informé tout au long du processus."
                    ]
                }
            ]
        },
        partners: {
            title: "Nos entreprises partenaires",
            text: "Telecom Etude possède des entreprises partenaires. Ces partenariats avec des entreprises nous permettent de bénéficier de formations pratiques, de prêter nos locaux pour leurs événements, et d'établir des relations professionnelles solides. En tant qu'étudiants, c'est une occasion unique d'acquérir des compétences tout en découvrant le monde de l'entreprise. Cela renforce nos opportunités futures et développe notre réseau.",
            kpmg: {
                type: "Audit et conseil",
                text: "Notre partenariat avec KPMG s'inscrit dans une volonté de bénéficier aux deux parties. Telecom Etude participe au rayonnement de KPMG auprès des étudiants, en contrepartie KPMG organise en collaboration avec Telecom Etude des évènements à destination des étudiants dans les locaux de Telecom durant l'année afin de faire découvrir les métiers du conseil, ainsi qu'une visite des locaux de KPMG en fin d'année accompagné d'un échange en petits groupes."
            },
            bain: {
                type: "Cabinet de conseil",
                text: "Bain & Company est le cabinet de conseil international qui accompagne les dirigeants ambitieux pour transformer leurs entreprises en pionnières du monde de demain. Ce partenariat prestigieux nous permet de mettre en relation les étudiants de Telecom Paris avec les consultants et recruteurs de Bain & Company à travers des évènements privilégiés."
            },
            bearingPoint: {
                type: "Cabinet de conseil",
                text: "Ensemble, nous sommes plus qu'une entreprise: telle est la raison d'être de ce cabinet de conseil en management et technologie. BearingPoint accompagne ses clients dans plus de 75 pays et les aide à obtenir des résultats mesurables, durables, et responsables. Depuis 2005, BearingPoint accompagne notre structure, tant en nous formant qu'en nous offrant des opportunités commerciales. Cette réelle synergie est le fruit d'une volonté commune de faire valoir les talents d'aujourd'hui dans une entreprise à notre image : force de proposition et à l'avant-garde de demain. En permettant à des étudiant télécomiens de se rendre dans leurs locaux, ou en valorisant notre réseau d'alumni, BearingPoint s'inscrit dans notre écosystème au travers d'une collaboration mutuellement bénéfique."
            }
        },
        about: {
            description: "la Junior-Entreprise du numérique et de la data",
            moreInfo: "Plus d'informations",
            ourMandate: "Notre mandat",
            alt: {
                mandat: "Photo du Mandat de Telecom Etude",
                tp: "Photo de Télécom Paris",
                afnor: "Logo de l'AFNOR",
                cnje: "Logo de la CNJE"
            },
            titles: {
                ourje: "Notre JE",
                ourschool: "Notre école\u00A0: Télécom Paris",
                quality: "Une JE de qualité",
                satisfaction: "Notre objectif\u00A0: Votre satisfaction",
                ieseg: "Une préstation commune"
            },
            quality: [
                "Un taux de satisfaction de nos de clients de plus de 97%.",
                "Une des seules Junior-Entreprises à être certifiée AFNOR ISO\u00A09001.",
                'Nous avons la meilleure mention "Satisfait" de la CNJE depuis plusieurs années.'
            ],
            ourshool: {
                chooseTP: "Choisir Télécom Paris, c'est choisir la Junior-Entreprise de",
                rankings: [
                    "La **1ère école d'ingénieur du numérique** (Le Figaro, 2021)",
                    "La **1ère école pour la proximité avec les entreprises**, et la **2ème école d'ingénieur** au classement général (L'Etudiant 2022)",
                    'La **6ème "small university" au monde** (Times Higher Education World University Ranking 2021)'
                ]
            },
            ourje: [
                "Telecom Etude est la Junior-Entreprise (JE) de Télécom Paris, **première école du numérique** en France, et propose à ses clients l'expertise de plusieurs centaines d'étudiants.",
                "Choisir notre JE, c'est avant tout travailler avec une **équipe réactive et disponible**. Vous développerez vos projets avec des étudiants de Télécom Paris, compétents, motivés et qui auront choisi de s'investir dans cette mission."
            ],
            ieseg: [
                "**IESEG Conseil Paris et Telecom Etude** s'associent pour offrir des services complets en combinant leurs expertises en ingénierie et en gestion. Cette collaboration permet de proposer des solutions innovantes et adaptées aux besoins spécifiques des entreprises, allant de l'évaluation de la faisabilité technique à la mise en place de stratégies de croissance digitale.",
                "Grâce à cette synergie, IESEG Conseil et Telecom Etude fournissent des analyses approfondies et des recommandations stratégiques, tout en développant des outils sur mesure tels que des **chatbots, des applications, des plateformes web ou des modèles d'intelligence artificielle**.",
                "Cette double présentation combine **l'expertise en conseil** d'IESEG Conseil avec les **compétences technologiques** de Telecom Etude, offrant ainsi des solutions robustes et personnalisées pour vous accompagner dans votre transformation digitale et votre croissance."
            ],
            satisfaction:
                "Depuis sa création, la CNJE œuvre pour promouvoir la marque Junior-Entreprise afin qu'elle reste un **gage de qualité**. Pour cela, elle décerne des labels qualité aux structures méritoires, et met en place des audits-conseils annuels. La CNJE fournit l'assurance que nos administrateurs ou chefs de projet reçoivent les formations adéquates pour proposer à nos clients **formalisme et efficacité**."
        },
        contact: {
            title: "Contactez-nous !",
            before: "Vous avez un projet en tête\u00A0? Vous avez besoin de plus d'informations sur notre offre\u00A0? N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en nous envoyant un email à ",
            after: ". Nous reviendrons vers vous dès que possible.",
            terms: "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter dans le cadre de votre demande et de la relation commerciale qui peut en découler. ",
            form: {
                name: {
                    label: "Nom",
                    placeholder: "Votre nom",
                    error: "Merci de fournir un nom"
                },
                email: {
                    label: "Email",
                    placeholder: "Votre email",
                    error: "Merci de fournir une adresse email valide"
                },
                tel: {
                    label: "Téléphone",
                    placeholder: "Votre numéro de téléphone",
                    error: "Numéro de téléphone invalide"
                },
                societe: {
                    label: "Société",
                    placeholder: "Votre nom de société"
                },
                subject: {
                    label: "Objet",
                    placeholder: "Un titre pour votre message"
                },
                message: {
                    label: "Message",
                    placeholder: "Votre message à l'équipe",
                    error: "Merci d'écrire un message"
                },
                send: "Envoyer"
            },
            success: {
                title: "Message envoyé !",
                message: "Merci pour votre message. Nous vous recontacterons dès que possible."
            },
            error: {
                title: "Erreur lors de l'envoie",
                message: "Merci de nous envoyé un mail directement à"
            }
        },
        legal: {
            title: "Mentions légales",
            credits: "Crédits Photos",
            hosting: "Hébergement",
            dev: "Développement",
            madeBy: "Site réalisé en NextJS par Tom Webber",
            loi: {
                host: "Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, vous trouverez ci-dessous les informations relatives à l'éditeur et à l'hébergeur de ce site internet.",
                rgpd: {
                    before: "Conformément au RGPD, vous pouvez faire valoir vos droit d'accès, de portabilité, de rectification, d'opposition ou d'effacement de vos données en envoyant une demande à",
                    in: "ou via le ",
                    contact: "formulaire de contact",
                    after: "sur le site."
                }
            },
            loi1901: "Association loi 1901, affiliée à la CNJE",
            siegesocial: "Siège social : Télécom Paris, 19, place Marguerite Perey 91120 PALAISEAU",
            siret: "[Numéro SIRET : 332 711 522 00018 | Numéro URSSAF : 757 090058076001011 8",
            tva: "Numéro TVA Intra-communautaire : FR 1933 2711 522 00018 | Code APE : 6202A]",
            respoRGPD: "Délégué à la protection des données (DPO) : Leïla Iksil",
            rezelsiege: "Siège social : 19 Place Marguerite Perey, 91120 PALAISEAU",
            contact: "Contact :"
        }
    }
};
