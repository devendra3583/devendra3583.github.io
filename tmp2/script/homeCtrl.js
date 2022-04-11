app.controller('homeCtrl', ['$scope', function ($scope) {
        

        $scope.health = [
            {
                "id": 1,
                "name": "The Vitamin D CURE",
                "author": "JAMES E DOWD, MD & DIANE STAFFORD"
            },
            {
                "id": 2,
                "name": "Vitamin D and Cancer",
                "author": "Donald L. Trump & Candace S. Johnson"
            }
         ];   

         $scope.wealth = [

            {
                "id": 1,
                "name": "CHOOSE YOURSELF: BE HAPPY, MAKE MILLIONS, LIVE THE DREAM",
                "author": "JAMES ALTUCHER"
            },
            {
                "id": 2,
                "name": "Rich Dad Poor Dad",
                "author": "Robert Kiyosaki"
            },
            {
                "id": 3,
                "name": "The Millionaire Fastlane",
                "author": "M J Demarco"
            },
            {
                "id": 4,
                "name": "Unscripted",
                "author": "M J Demarco"
            },
            {
                "id": 5,
                "name": "The Organized Mind",
                "author": "Daniel Levitin"
            },
            {
                "id": 6,
                "name": "The Power of Positive Thinking",
                "author": "Norman Vincent"
            },
            {
                "id": 7,
                "name": "177 MENTAL TOUGHNESS SECRETS OF THE WORLD CLASS",
                "author": "Steve Siebold"
            },
            {
                "id": 8,
                "name": "THE TIME VALUE OF LIFE",
                "author": "TISA L. SILVER, MBA"
            },
            {
                "id": 9,
                "name": "You were Born Rich",
                "author": "Bob Proctor"
            },
            {
                "id": 10,
                "name": "The Leverage EQUATION.",
                "author": "Todd Tressider"
            },
            {
                "id": 11,
                "name": "How much money do I need to retire",
                "author": "Todd Tressider"
            },
            {
                "id": 12,
                "name": "",
                "author": ""
            },
            {
                "id": 13,
                "name": "Wealth Creation Thoughts",
                "author": "Raamdeo Agarwal"
            },
            {
                "id": 14,
                "name": "THE POWER OF HABIT",
                "author": "CHARLES DUHIGG"
            },
            {
                "id": 15,
                "name": "Why A Students work for C Students and B Student work for the Government",
                "author": "Robert Kiyosaki"
            },
            {
                "id": 16,
                "name": "How to Win Friends and Influence People",
                "author": "Dale Carnegie"
            },
            {
                "id": 17,
                "name": "THE SECRETS TO POSITIVE CASHFLOW",
                "author": "Rich Dad (Document)"
            },
            {
                "id": 18,
                "name": "Stochastic calculus and finance",
                "author": "Steven Shreve"
            },
            {
                "id": 19,
                "name": "Influence: The Psychology of Persuasion, Revised Edition",
                "author": "ROBERT B. CIALDINI, PH.D."
            },
            {
                "id": 20,
                "name": "The Success Principles",
                "author": "Jack Canfield"
            }



/*


THE GREATEST SALESMAN IN THE WORLD -OG MANDINO
THE MILLIONAIRE MIND -Thomas J. Stanley, PhD
THE MILLIONAIRE NEXT DOOR -Thomas J. Stanley, PhD, William D. Denko, PhD
THE ENTREPRENEUR MIND -KEVIN D. JOHNSON
From the RAT RACE to FINANCIAL FREEDOM: A common man’s journey -MANOJ ARORA
THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE -STEPHEN R. COVEY
WARREN BUFFET WEALTH - PRINCIPLES & PRACTICAL METHODS USED BY THE WORLD'S GREATEST INVESTOR -ROBERT P. MILES - WILEY
Secrets of The Millionaire Mind - Mastering The Inner Game of Wealth -T Harv Eker
How Rich People Think -Steve Siebold
UNSTOPPABLE by CYNTHIA KERSEY
The 67 Steps by Tai Lopez
The Go-Getter by Peter Kyne pdf
The Fish That Ate the Whale: The Life & Times of America’s Banana King – By Rich Cohen
Willpower: Rediscovering the Greatest Human Strength – By Roy Baumeister & John Tierney
The Essential Drucker – By Peter F. Drucker
The Magic of Thinking Big  -By David J. Schwartz
Compelling People: The Hidden Qualities That Make Us Influential – By John Neffinger & Matthew Kohut
King of Capital: The Remarkable Rise, Fall & Rise Again of Steve Schwarzman and Blackstone – By David Carey
How Google Works – By Eric Schmidt
Screw It, Let’s Do It: Lessons in Life & Business – By Richard Branson
Where Good Ideas Come From – By Steven Johnson
The Self-Made Billionaire Effect: How Extreme Producers Create Massive Value – John Sviokla & Mitch Cohen
The Art of War – By Sun Tzu
The Self-Made Billionaire Effect: How Extreme Producers Create Massive Value – John Sviokla & Mitch Cohen
Bounce – By Matthew Syed
Subliminal: How Your Unconscious Mind Rules Your Behavior – By Leonard Mlodinow
The Winner Effect – By Ian H. Robertson
A Few Lessons For Investors and Managers – By Warren Buffett
The Snowball: Warren Buffett & The Business of Life – By Alice Schroeder
Poor Charlie’s Almanack: The Wit and Wisdom of Charles T. Munger – By Peter Kaufman
Testing Advertising Methods – By John Caples
Smart Pricing – By Jagmohan Raju & Z. John Zhang
How to Get Rich – By Felix Dennis
Pitch Anything – By Oren Klaff
Confessions of An Advertising Man – By David Ogilvy
HOW TO BE A BILLIONAIRE: PROVEN STRATEGIES FROM THE TITANS OF WEALTH -MARTIN S. FRIDSON, CFA
Human Resource Management – By Robert L. Mathis & John H. Jackson
Characteristics of the "World Class Rich" -DKA (main ideas taken from 177 Mental Toughness Secrets of World Class by Steve Seibold)
Good Clean Jokes -Bob Philips
Emotional Intelligene -Daniel Goleman
Becoming a crtical thinker -Sherry Diestler
Breaking the No Barrier -Walter Hailey
The Dynamic Laws of Prosperity -Catherine Ponder
Power Linguistics -Dave Yoho
There’s a spiritual solution to every problem -Dr. Wayne Dyer
Fear -the biggest energy sucker known to man.
Power vs Force -Dacid R Hawkins, MD, PhD
The Edge: The Guide to Fulfilling Dreams, Maximizing Success and Enjoying a Lifetime of Achievement -Howard Ferguson
The Artist’s Way -Julia Cameron
Maslow on Management -Arbraham Maslow
What to say When you talk to yourself -Dr. Shed Helmstetter
Changing the Game, The New Way to Sell -Larry Wilson
The 48 Rules of Power -Robert Greene
The Art of Seduction -Robert Greene
THE LAWS OF HUMAN NATURE -ROBERT GREENE
Getting Things Done -David Allen
Declarations to the Sub-conscious Mind (according to Secrets of The Millionaire Mind - Mastering The Inner Game of Wealth -T Harv Eker Pg-15
SMART WORK, HARD WORK -ATUL MAGOON
A Fine Line Between Art and Entertainment  Victor Borge
Atomic Habits -James Clear
THE SCIENCE OF MAKING MONEY -DOYLE H ROBERTS
THE MASTER KEY SYSTEM -CHARLES F HAANEL
ORIGINALITY - A POPULAR STUDY OF THE CREATIVE MIND -T SHARPER KNOWLSON 
30 Principles : Time Management
The Power of Intention -Wayne Dyer
The Richest Man in Babylon
Inquiry into the nature and causes of wealth of nations
The Game of Life and How to play it AudioBook
The Wealth of Nations -Adam Smith Audio Book
THE SCIENCE OF GETTING RICH -WALLACE D WATTLES
The Science of Being Well -Wallace D Wattles AudioBook
The Science of Being GREAT -Wallace D Wattles AudioBook
Think Fast and Slow -Daniel Kahneman
Zero to One -Peter Thiel (started PayPal with Elon Musk, which is a 100 billion dollar company today as of 2020-05-02)
Blue Ocean Strategy
The Subtle Art of Not Giving a F*ck
The One Thing
The 4 Hour WorkWeek
The Personal MBA: A World-Class Business Education in a Single Volume -Josh Kaufman
THE FIRST 20 HOURS -JOSH KAUFMAN
THE POWER OF YOUR SUBCONSCIOUS MIND -DR. JOSEPH MURPHEY
The 5 AM Club: Own Your Morning. Elevate Your Life -Robin Sharma
PRINCIPLES By Ray Dalio
THE SUCCESS SYSTEM THAT NEVER FAILS -WILLIAM CLEMENT STONE
UNLOCK IT -DAN LOK
Poor Charlie’s Almanack -Charlie Munger
The Little Book of Common Sense Investing -John C. Bogle
HOW TO BE RICH -J PAUL GETTY (Self made Billioanire)
THE LATTE FACTOR -DAVID BACH AND JOHN DAVID MANN
Rich Habits: The Daily Success Habits of  Wealthy Individuals -Thomas Corley
HOW TO TALK TO ANYONE -LEILL LOWNDES
PRE-SUASION: A REVOLUTIONARY WAY TO INFLUENCE AND PERSUADE -ROBERT B. CIALDINI, PH.D.
12 RULES FOR LIFE: AN ANTIDOTE TO CHAOS -JORDAN B PETERSON
START WITH WHY: HOW GREAT LEADERS INSPIRE EVERYONE TO TAKE ACTION -SIMON SINEK
LEADERS EAT LAST: WHILE SOME TEAMS PUT TOGETHER WHILE OTHERS DON'T -SIMON SINEK
TOGETHER IS BETTER -SIMON SINEK
The Five Elements of Effective Thinking -Edward Burger and Michael Starbird
LETTING GO: THE PATHWAY OF SURRENDER -DAVID R. HAWKINS, PhD
LIFE MASTERY: MANIFEST THE REALITY YOU WANT -QUAZI JOHIR
THE CHARISMA MYTH -OIVIA FOX CABANE
THE NET AND THE BUTTERFLY -OIVIA FOX CABANE AND JUDAH POLLACK
THE POWER OF OTHERS: Peer Pressure, Groupthink, and How the People Around Us Shape Everything We Do -MICHAEL BOND
Power of Positive Thinking: Live well above the ordinary -G.D. Buddhiraja
THE COMPOUND EFFECT: JUMPSTART YOUR INCOME, YOUR LIFE, YOUR SUCCESS -DARREN HARDY
OUTLIERS: THE STORY OF SUCCESS -MALCOLM GLADWELL
GOOD TO GREAT -JIM COLLINS
THE BILLION DOLLAR SECRET: 20 Principles of Billionaire Wealth and Success -Rafael Badziag
THE 10X RULE -GRANT CARDONE
BE OBSESSED OR BE AVERAGE -GRANT CARDONE
THE 5 ESSENTIAL PEOPLE SKILLS: How to Assert Yourself, Listen to Others and Resolve Conflicts -Dale Carnegie
THE ART OF COMMUNICATING -THICH NHAT HANH
THINK Like a BILLIONAIRE: Proven Strategies from the Titans of Wealth -Martin S. Fridson
The Art of Money Getting; or Golden Rules for Making Money -P. T.(PHINEAS TAYLOR) BARNUM
Complete Chanakya Neeti -R. P. Jain
JACK CANFIELD'S UNIVERSAL PRINCIPLES OF SUCCESS: HOW TO BECOME THE PERSON YOU WANT TO BE AND TO GET EVERYTHING YOU WANT -OMER FAROOQ
TOOLS OF TITANS: THE TACTICS, ROUTINES AND HABITS OF BILLIONAIRES, ICONS AND WORLD-CLASS PERFORMERS -TIM FERRISS
SPEED READING: HOW TO DOUBLE (OR TRIPLE) YOUR READING SPEED IN JUST 1 HOUR! -JUSTIN HAMMOND
PRINCIPLES FOR SUCCESS -RAY DALIO
HOW SUCCEESSFUL PEOPLE THINK -JOHN C. MAXWELL
HOW TO BUILD HABITS AND EXECUTE EFFORTLESSLY -
EXACTLY WHAT TO SAY: The Magic Words for Influence and Impact -PHIL M. JONES
PSYCHO-CYBERNETICS -MAXWELL MALTZ
NEVER EAT ALONE: And other Secrets to Success, One Relationship at a time -Keith Ferrarzi
THE POWER OF NOW -ECKHERT TOLLE
The Innovator's Dilemma: The Revolutionary Book That Will Change the Way You Do -CLAYTON M. CHRISTENSEN
Brihat Parasara Hora 1,2,3
EAT THAT FROG: 21  Great Ways to Stop Procrastination and Get More Done In Less Time -Brian Tracy
THE 80/20 PRINCIPLE: The Secret of Achieving More With Less -RICHARD KOCH
THE ONE MINUTE MILLIONAIRE -MARK AND ALLEN
GREAT BY CHOICE -Jim Collins & Morten T. Hansen “Imagine being on a leisurely hike, wandering along warm, sunlit meadows, and your companion is a great mountaineer who has led expeditions up the most treacherous peaks in the world. You’d probably notice that he’s a little different from others, perhaps more watchful of the trail or more careful in packing his small day-pack. But overall, given the safe predictability of a glorious spring day, it would be hard to see what really makes this leader so exceptional. Now, in contrast, envision yourself on the side of Mount Everest with this same climber, racing a murderous storm. In that environment, you’d see much more clearly what makes him different and what makes him great.”
THE SELFISH GENE -RICHARD DAWKINS
THE GREAT GAME OF BUSINESS -JACK STACK
THE PARADOX OF CHOICE: WHY MORE IS LESS -BARRY SCHWARTZ
Amish Society -JOHN A. HOSTELER
GET EBB AND FLOW INTO DAILY CYCLES -JIM COLLINS
ORIGINALS: HOW NON-CONFORMISTS CHANGE THE WORLD -ADAM GRANT, Wharton School, Professor
THE ART OF BEING RUTHLESS: HOW TO BE BOLD, FIND YOUR SPINE AND TAKE CONTROL OF YOUR LIFE -MICHAEL SLOAN
Cold Hard Truth On Men, Women, and Money: 50 Common Money Mistakes and How to Fix Them -Kevin O'Leary
J.R.SIMPLOT A billion the hard way -A biography by Louie Attebery
THE HARD THING ABOUT HARD THINGS -BEN HOROWITZ
THE DECISION MAKER -DENNIS BAKKE
The Checklist Manifesto -Atul Gawande
THE ART OF INFLUENCING PEOPLE -VIRENDER KAPOOR
MADE IN AMERICA -SAM WALTON
Dollars and Sense -Daniel Ariely
Man's Search for Meaning -VICTOR E. FRANKL
THE POWER OF TRUST: HOW COMPANIES BUILD IT, LOSE IT, REGAIN IT -SANDRA J. SUCHER, SHALENE GUPTA
Measure What Matters: OKRs: The Simple Idea that Drives 10x Growth -John Doerr
No Excuses: The Power of Self-Discipline -Brian Tracy
Self Discipline in 10 days: How to go from Thinking to Doing -Theodore Bryant
365 Days With Self-Discipline: 365 Life-Altering Thoughts on Self-Control, Mental Resilience, and Success
Self Discipline: Why Self Discipline Is Lacking In Most And How To Unleash It Now

*/
         ];   

         $scope.love = [
            {
                "id": 1,
                "name": "MEN ARE FROM MARS, Women are from Venus",
                "author": "JOHN GREY, PhD"
            }


         ]; 

         $scope.happiness = [
            {
                "id": 1,
                "name": "Bhagavad Gita",
                "author": "HDG Srila Prabhupada"
            },
            {
                "id": 2,
                "name": "Srimad Bhagavatam - Canto 1",
                "author": "HDG Srila Prabhupada"
            },
            {
                "id": 3,
                "name": "INNER ENGINEERING: A YOGI's GUIDE TO JOY",
                "author": "SADHGURU"
            }
         ]; 

    }]);