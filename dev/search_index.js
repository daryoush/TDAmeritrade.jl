var documenterSearchIndex = {"docs":
[{"location":"#TDAmeritrade.jl","page":"TDAmeritrade.jl","title":"TDAmeritrade.jl","text":"","category":"section"},{"location":"","page":"TDAmeritrade.jl","title":"TDAmeritrade.jl","text":"Documentation for TDAmeritrade.jl","category":"page"},{"location":"#Getting-started","page":"TDAmeritrade.jl","title":"Getting started","text":"","category":"section"},{"location":"","page":"TDAmeritrade.jl","title":"TDAmeritrade.jl","text":"Make an account at TD developers, this is different from your TD trading account\nMake an App, make sure to use \"http://localhost\" as your Callback URL\nAdd the Consumer Key of your application to ENV[\"JL_TD_CONSUMER_KEY\"] (environment variable)\nProfit, using TDAmeritrade and start off by running TD_auth() and follow the instruction.","category":"page"},{"location":"","page":"TDAmeritrade.jl","title":"TDAmeritrade.jl","text":"A file will be created at ~/.JL_TD_TOKENS_CACHE after first run to save the REFRESH_TOKEN.","category":"page"},{"location":"#APIs","page":"TDAmeritrade.jl","title":"APIs","text":"","category":"section"},{"location":"","page":"TDAmeritrade.jl","title":"TDAmeritrade.jl","text":"TD_auth\nprice_history\nget_quotes","category":"page"},{"location":"#TDAmeritrade.TD_auth","page":"TDAmeritrade.jl","title":"TDAmeritrade.TD_auth","text":"TD_auth()\n\nrun authentication procedure\n\nalready authenticated -> do nothing\naccess token expired && has refresh token -> refresh access token\nrefresh token expired -> get refresh token\nno CONSUMER_KEY -> error\n\n\n\n\n\n","category":"function"},{"location":"#TDAmeritrade.price_history","page":"TDAmeritrade.jl","title":"TDAmeritrade.price_history","text":"price_history(ticker; kwargs...)\n\nGet price history of a given ticker, everything but ticker have default value specified by TD api:  https://developer.tdameritrade.com/price-history/apis/get/marketdata/{symbol}/pricehistory\n\noptional kwargs: periodType period frequencyType frequency endDate startDate needExtendedHoursData\n\n\n\n\n\nprice_history(ticker, freq, peri)\n\nsee TD API for default and compatible frequency vs. tickers\n\n\n\n\n\nprice_history(ticker, freq, start::DateTime=now()-Day(1), stop::DateTime=now())\n\nget the price history with interval ticks from start to stop\n\nvalid frequency: minute: 1*, 5, 10, 15, 30\n\n\n\n\n\n","category":"function"},{"location":"#TDAmeritrade.get_quotes","page":"TDAmeritrade.jl","title":"TDAmeritrade.get_quotes","text":"get_quotes(ticker)\n\nGet quote of a symbol: https://developer.tdameritrade.com/quotes/apis/get/marketdata/{symbol}/quotes\n\nrequired: ticker\n\n\n\n\n\nget_quotes(tickers::Array)\n\nget multiple quotes at once\n\n\n\n\n\n","category":"function"}]
}
