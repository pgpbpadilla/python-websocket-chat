import asyncio
import websockets


async def echo(websocket, path):
    async for message in websocket:
        for socket in chat_server.websockets:
            await socket.send(message)


start_server = websockets.serve(echo, 'localhost', 8765)
chat_server = start_server.ws_server

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
