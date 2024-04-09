Test Cases:
By Jesus Barajas

------------------------------------------------------------------------------------------------------------------------------------------------------


Test 01: End to end Positive Scenario: Succesful search .
        Action      |   Expected Result     |
1.- Navigate to the App age | The page displays The header with the "Get Github Repos", A Label with "Github Username", A text input, a "GO" Button and a list of results.

2.- Input a "TEXT" in the input box | The text should be displayed as the user types on the input box.

3.- Click on the Go button |    A Green label with the text "Success" should appear and the label that is below the text input box should be updated with the results found on the search, aslo a list of found repositories should appear, for each result the app displays two elements on the list; Repository name and A description.


------------------------------------------------------------------------------------------------------------------------------------------------------


Test 02:  End to end Negative Scenario. No results.

1.- Navigate to the App age | The page displays The header with the "Get Github Repos", A Label with "Github Username", A text input, a "GO" Button and a list of results.

2.- Input "what is this" String in the input box | The text should be displayed as the user types on the input box.

3.- Click on the Go button |    A Red label with the text "Github user not found" should appear and the label that is below the text input box should be updated with the results found on the search, this search shouldn't display any results.

------------------------------------------------------------------------------------------------------------------------------------------------------


Test 03: Search a copy pasted text. 

        Action      |   Expected Result     |
1.- Navigate to the App age | The page displays The header with the "Get Github Repos", A Label with "Github Username", A text input, a "GO" Button and a list of results.

2.- Copy and paste a "TEXT" in the input box | The pasted text should be displayed  in the input box.

3.- Click on the Go button |    A Green label with the text "Success" should appear and the label that is below the text input box should be updated with the results found on the search, also a list of found repositories should appear, for each result the app displays two elements on the list; Repository name and A description.


------------------------------------------------------------------------------------------------------------------------------------------------------


Test 04: Search for a repo with one missing value.

1.- Navigate to the App age | The page displays The header with the "Get Github Repos", A Label with "Github Username", A text input, a "GO" Button and a list of results.

2.- Input "woa" String in the input box | The text should be displayed as the user types on the input box.

3.- Click on the Go button |     Green label with the text "Success" should appear and the label that is below the text input box should be updated with the results found on the search, this list first element should contain the "Top Face" Repo on it's first and unique element and the description should display "-" 

------------------------------------------------------------------------------------------------------------------------------------------------------
******************************************************************************************************************************************************------------------------------------------------------------------------------------------------------------------------------------------------------

BUGS:
BUG 01: Input "." Character in the search textbox
        Action      |   Expected Result     | Aactual Result
1.- Navigate to the app page  |   The page displays The header with the "Get Github Repos", A Label with "Github Username", A text input, a "GO" Button and a list of results.

2.-Input the "." Character on the input box. | The dot character should be displayed in the textbox.

3.- Click the GO button | A Red label with the text "Github user not found" should appear and the label that is below the text input box should be updated with the results found on the search, this search shouldn't display any results.  | Verify that the  results displays "No repos" but a Green Label with Success state appears and shouldn't

