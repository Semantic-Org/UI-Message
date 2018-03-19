### Version 2.3.1 - Mar 19, 2018

> **A Special Message about Flex Modals**

### Version 2.2.11 - July 11, 2017

- **Message** - Fix issue with `compact icon message` not appearing compact [#4759](https://github.com/Semantic-Org/Semantic-UI/issues/4759)

#### Dropdown

- **Search** - Fixes issue where empty results message can still appear when using setting `showNoResults: false` [#4616](https://github.com/Semantic-Org/Semantic-UI/pull/4616)

### Version 2.2.4 - August 25, 2016

- **Message** - Added additional variables for `@padding`

### Version 2.2.0 - June 26, 2016

- **Search** - Search now includes a `showNoResults` setting for determining whether no results messages should be shown
- **Site** - Added colored box shadow defaults. `ui message` now includes individual colored border shadows based on new site defaults.
- **Dropdown** - Fixed issue where value set using javascript DOM metadata would be cleared when a message or user addition triggered `refresh` [#3879](https://github.com/Semantic-Org/Semantic-UI/issues/3879) [#3622](https://github.com/Semantic-Org/Semantic-UI/issues/3622) **Thanks @mdehoog**
- **Search** - Fixed an issue where `onResult` returning `false` would not prevent the search menu from hiding. Clicking on an empty results message will also no longer close the search results. [#3856](https://github.com/Semantic-Org/Semantic-UI/issues/3856) [#3870](https://github.com/Semantic-Org/Semantic-UI/issues/3870)
- **Message** - Fixes `compact message` appearing as `block` when inside a `form` [#3343](https://github.com/Semantic-Org/Semantic-UI/issues/3343) **Thanks @bcroq**
- **Segment/Message** - `top attached message` has no border when attached to `segment` [#3619](https://github.com/Semantic-Org/Semantic-UI/issues/3619)

### Version 2.1.7 - Dec 19, 2015

- **Search** - Search now correctly hides menu when an error message inside results is clicked. [#3039](https://github.com/Semantic-Org/Semantic-UI/issues/3039)

### Version 2.1.4 - Sep 13, 2015

- **Message** - `ui list` used inside `ui message` now aligns properly in all conditions [#2958](https://github.com/Semantic-Org/Semantic-UI/issues/2958)
- **Form Validation** - Validation messages in `error message` group are now correctly removed when invalid field revalidates on blur

#### Features

- **Dropdown** - Dropdown with user additions now will use custom templated messages to distinguish added choice from preselected choice [#2923](https://github.com/Semantic-Org/Semantic-UI/issues/2923)

#### Bugs

- **Dropdown** - Fixed issue where "no results" message would be still be visible before search query on input focus [#2824](https://github.com/Semantic-Org/Semantic-UI/issues/2824)
- **Form** - Form will no longer show messages that are empty in `error`, `warning`, or `success` state.

### Version 2.0.5 - July 20, 2015

- **Message** - Fixed issues where icon would overlap in `icon message` when at mobile resolutions due to `flex-collapse` value being incorrect [#2665](https://github.com/Semantic-Org/Semantic-UI/issues/2665)

### Version 2.0.4 - July 17, 2015

- **Message** - Fixes `attached icon message` not using `flex`

### Version 2.0.1 - July 6, 2015

- **Dropdown** - Dropdown will now show correctly when menu only includes a message with no other items

### Version 2.0.0 - June 30, 2015

- **Dropdowns** - Added ability to add custom choices to all search selection dropdowns (multi/single) using `allowAdditions: true` setting. Search now displays error messages on no results in all cases.
- **Message** - `icon message` now uses `flexbox` for layout
- **Message** - Message now uses `@lineHeight` from `site.variables`
- **Message** - Updated all message colors for legibility
- **Message** - Close icon position adjusted to align with headers
- **Popup** - Popup will now produce an error message and not mistakenly appear in the top left corner of page, if called with a `popup` or `target` that does not exist.
- **Message** - Slightly increases `box-shadow`

### Version 1.10.4 - February 28, 2015

- **API** - Remove console error message when no API url is specified but element is a `form` (defaults to `form` action)

### Version 1.10.0 - February 23, 2015

- **Form Validation** - Validation messages no longer increase field height on `inline fields` like checkboxes after error appears
- **Search** - Category search no longer displays unnecessary error message about maxResults

### UI Changes

- **Form** - `info message` are no longer hidden by default inside `ui form`

### Version 1.3.0 - December 17, 2014

- **All UI** - Adds error message when triggering an invalid module behavior i.e. typos ``$('.dropdown').dropdown('hid');``

### Version 1.0.0 - November 24, 2014

- **Form** - Form now has a success state which will automatically display success messages
- **Form** - Forms in 'success' state will now show success messages inside

### Version 0.15.5 - April 11, 2014

- **Message** - Fixes hidden/visible class to work with animations
- **Message** - Fixes hidden/visible class to set proper display on ``ui icon message``
- **Message** - Fixes hitbox/position of ``close icon`` inside message

### Version 0.12.3 - Jan 24, 2014

- **Message** - Fixes some issues with margins sometimes not appearing with ``attached message`` **thanks joltmode**

### Version 0.12.2 - Jan 21, 2014

- **Form Validation** - Adding custom validation is now simpler, uses syntax ``$('.form').form('add prompt', identifier, 'Error message');``

### Version 0.12.1 - Jan 15, 2014

- **Message** - Prevents close icon from being misformatted in icon message **thanks MohammadYounes**

### Version 0.9.6 - Dec 04, 2013

- **Message** - Fixes issues with attached icon message (thanks overra)

### Version 0.8.5 - Nov 2, 2013

- **Modules** - Invoke now gives user's query in error message for method not found

### Version 0.7.0 - Oct 22, 2013

- **Message** - Increase opacity of icons on icon messages

### Version 0.1.0 - Sep 25, 2013