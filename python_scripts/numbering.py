import pandas as pd

df_to_clean = pd.read_csv("records.csv", sep=";")
df_to_clean.to_csv("records_numerado.csv", sep=";",index = True)
df_to_clean = pd.read_csv("records_numerado.csv", sep=";")
df_to_clean.columns=['number', 'Speaker', 'Title', 'Repository', 'Date', 'Kind','Passcode']
df_to_clean.to_csv("records_numerado.csv", sep=";", index = False)
